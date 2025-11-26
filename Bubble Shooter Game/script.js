// Bubble Shooter — script.js
// Drop into same folder with index.html and styles.css
// Controls: Move mouse to aim, click (or tap) to fire. Music toggle with button.

(() => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');
  const music = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');

  // ----- Config -----
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  const RADIUS = 20;            // bubble radius (pixels)
  const ROWS = 9;               // initial bubble rows
  const COLUMNS = 14;           // columns across (staggered)
  const COLORS = ['#FF6B6B','#FFD166','#06D6A0','#4D96FF','#C77DFF','#FF9AC2'];
  const SHOOT_SPEED = 9;
  const SNAP_PADDING = 2;       // extra adjustment when snapping to grid
  const TOP_MARGIN = 40;
  const GRID_OFFSET_X = RADIUS + 6;
  const GRID_OFFSET_Y = TOP_MARGIN;
  const EMPTY = null;

  // ----- State -----
  let grid = [];                // 2d array: rows x columns
  let shooter = null;           // {x,y,dx,dy,color,ready}
  let nextColor = randomColor();
  let mouse = {x: WIDTH/2, y: HEIGHT - 80};
  let score = 0;
  let animationId = null;
  let gameOver = false;

  // ----- Helpers -----
  function randInt(n){ return Math.floor(Math.random()*n); }
  function randomColor(){ return COLORS[randInt(COLORS.length)]; }

  function createGrid(){
    grid = [];
    for(let r=0;r<ROWS;r++){
      grid[r] = [];
      for(let c=0;c<COLUMNS;c++){
        // staggered grid: leave some spaces at edges for nicer shape
        if(r < ROWS - 2 || Math.random() > 0.25){
          grid[r][c] = {
            color: COLORS[randInt(COLORS.length)]
          };
        } else {
          grid[r][c] = EMPTY;
        }
      }
    }
    // ensure top rows are mostly filled to start
    for(let r=0;r<2;r++){
      for(let c=0;c<COLUMNS;c++){
        if(Math.random() < 0.85) grid[r][c] = {color: COLORS[randInt(COLORS.length)]};
      }
    }
  }

  function findNearestGridPos(x,y){
    // convert x,y to row/col in staggered grid
    const rowHeight = Math.sqrt(3)*RADIUS;
    let r = Math.round((y - GRID_OFFSET_Y) / (rowHeight*0.5)); // hacky conversion
    // we'll search neighbor cells for best fit
    let best = null;
    let bestDist = 1e9;
    for(let rr=0; rr<ROWS; rr++){
      for(let cc=0; cc<COLUMNS; cc++){
        const pos = gridToPixel(rr,cc);
        const dx = x - pos.x, dy = y - pos.y;
        const d = Math.hypot(dx,dy);
        if(d < bestDist){
          bestDist = d;
          best = {r: rr, c: cc};
        }
      }
    }
    return best;
  }

  function gridToPixel(r,c){
    // hex-like stagger: odd rows offset by RADIUS
    const xPad = RADIUS*2 + 4;
    const yPad = Math.sqrt(3)*RADIUS/1.5; // vertical spacing
    const x = GRID_OFFSET_X + c * xPad + (r % 2 ? RADIUS + 2 : 0);
    const y = GRID_OFFSET_Y + r * (RADIUS * 1.75);
    return {x,y};
  }

  function drawBubble(x,y,color,alpha=1){
    ctx.beginPath();
    ctx.arc(x,y,RADIUS,0,Math.PI*2);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
    // glossy highlight
    ctx.beginPath();
    ctx.arc(x - RADIUS/3, y - RADIUS/3, RADIUS/2.2, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    ctx.fill();
    // outline
    ctx.beginPath();
    ctx.arc(x,y,RADIUS,0,Math.PI*2);
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    ctx.stroke();
  }

  // ----- Shooter -----
  function spawnShooter(){
    const c = nextColor;
    nextColor = randomColor();
    shooter = {
      x: WIDTH/2,
      y: HEIGHT - 60,
      dx: 0,
      dy: 0,
      radius: RADIUS,
      color: c,
      active: false
    };
  }

  function fireAt(targetX, targetY){
    if(!shooter || shooter.active) return;
    const ang = Math.atan2(targetY - shooter.y, targetX - shooter.x);
    shooter.dx = Math.cos(ang) * SHOOT_SPEED;
    shooter.dy = Math.sin(ang) * SHOOT_SPEED;
    shooter.active = true;
  }

  // ----- Match & Clear -----
  function snapShooterToGrid(){
    const pos = findNearestGridPos(shooter.x, shooter.y);
    if(!pos) return;
    // if occupied, try to find nearest empty neighbor
    if(grid[pos.r][pos.c] !== EMPTY){
      // search small radius
      const neighbors = getNeighbors(pos.r, pos.c);
      let placed = false;
      for(const n of neighbors){
        if(grid[n.r][n.c] === EMPTY){
          grid[n.r][n.c] = {color: shooter.color};
          placed = true; break;
        }
      }
      if(!placed){
        // fallback: find any empty cell nearest
        for(let rr=0; rr<ROWS; rr++){
          for(let cc=0; cc<COLUMNS; cc++){
            if(grid[rr][cc] === EMPTY){
              grid[rr][cc] = {color: shooter.color};
              placed = true; rr=ROWS; break;
            }
          }
        }
      }
    } else {
      grid[pos.r][pos.c] = {color: shooter.color};
    }

    // after placement, check matches
    const matched = getConnectedSameColor(pos.r, pos.c);
    if(matched.length >= 3){
      // remove matched
      for(const p of matched) grid[p.r][p.c] = EMPTY;
      score += matched.length * 10;
      scoreEl.textContent = `Score: ${score}`;
      // remove floating bubbles (not connected to top)
      removeFloatingBubbles();
    }

    shooter = null;
    spawnShooter();
  }

  function getNeighbors(r,c){
    // neighboring indices for staggered rows
    const neighbors = [];
    const even = (r % 2 === 0);
    // always adjacent horizontally
    const deltas = even ? [
      [-1,0],[-1, -1], [0,-1],[0,1],[1,0],[1,-1]
    ] : [
      [-1,0],[-1,1],[0,-1],[0,1],[1,0],[1,1]
    ];
    for(const d of deltas){
      const nr = r + d[0], nc = c + d[1];
      if(nr >=0 && nr < ROWS && nc >=0 && nc < COLUMNS){
        neighbors.push({r:nr,c:nc});
      }
    }
    return neighbors;
  }

  function getConnectedSameColor(r,c){
    const start = grid[r][c];
    if(!start) return [];
    const color = start.color;
    const visited = Array.from({length:ROWS},()=>Array(COLUMNS).fill(false));
    const stack = [{r,c}];
    const connected = [];
    visited[r][c] = true;
    while(stack.length){
      const p = stack.pop();
      connected.push(p);
      const nbs = getNeighbors(p.r,p.c);
      for(const n of nbs){
        if(!visited[n.r][n.c] && grid[n.r][n.c] && grid[n.r][n.c].color === color){
          visited[n.r][n.c] = true;
          stack.push({r:n.r,c:n.c});
        }
      }
    }
    return connected;
  }

  function removeFloatingBubbles(){
    // mark all bubbles connected to top rows
    const visited = Array.from({length:ROWS},()=>Array(COLUMNS).fill(false));
    const stack = [];
    // push all filled bubbles in top row(s)
    for(let c=0;c<COLUMNS;c++){
      if(grid[0][c] !== EMPTY){
        visited[0][c] = true;
        stack.push({r:0,c});
      }
    }
    while(stack.length){
      const p = stack.pop();
      const nbs = getNeighbors(p.r,p.c);
      for(const n of nbs){
        if(!visited[n.r][n.c] && grid[n.r][n.c] !== EMPTY){
          visited[n.r][n.c] = true;
          stack.push({r:n.r,c:n.c});
        }
      }
    }
    // any bubble not visited will fall (remove)
    let fell = 0;
    for(let r=0;r<ROWS;r++){
      for(let c=0;c<COLUMNS;c++){
        if(grid[r][c] !== EMPTY && !visited[r][c]){
          grid[r][c] = EMPTY;
          fell++;
        }
      }
    }
    if(fell > 0){
      score += fell * 15;
      scoreEl.textContent = `Score: ${score}`;
    }
  }

  // ----- Collision detection -----
  function bulletCollides(){
    // hits ceiling
    if(shooter.y - shooter.radius <= GRID_OFFSET_Y + 4){
      return true;
    }
    // collision against any placed bubble
    for(let r=0;r<ROWS;r++){
      for(let c=0;c<COLUMNS;c++){
        if(grid[r][c] !== EMPTY){
          const pos = gridToPixel(r,c);
          const d = Math.hypot(shooter.x - pos.x, shooter.y - pos.y);
          if(d <= shooter.radius + RADIUS - SNAP_PADDING){
            return true;
          }
        }
      }
    }
    return false;
  }

  // ----- Game Loop -----
  function update(){
    if(gameOver) return;
    // shooter movement
    if(shooter && shooter.active){
      shooter.x += shooter.dx;
      shooter.y += shooter.dy;
      // wall bounce
      if(shooter.x - shooter.radius <= 0){ shooter.x = shooter.radius; shooter.dx *= -1; }
      if(shooter.x + shooter.radius >= WIDTH){ shooter.x = WIDTH - shooter.radius; shooter.dx *= -1; }

      if(bulletCollides()){
        // snap into grid
        snapShooterToGrid();
      }
    }

    // check lose condition: any bubble reaches bottom rows
    for(let c=0;c<COLUMNS;c++){
      for(let r=ROWS-1; r>=0; r--){
        if(grid[r][c] !== EMPTY){
          const pos = gridToPixel(r,c);
          if(pos.y + RADIUS >= shooter ? shooter.y - 10 : HEIGHT - 120){
            // if grid low enough -> game over
            if(pos.y + RADIUS > HEIGHT - 160){
              gameOver = true;
              setTimeout(()=> alert('Game Over! Final Score: ' + score), 50);
            }
          }
        }
      }
    }
  }

  function draw(){
    // clear
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    // background faint circles
    const grd = ctx.createLinearGradient(0,0,0,HEIGHT);
    grd.addColorStop(0,'rgba(255,255,255,0.03)');
    grd.addColorStop(1,'rgba(200,180,255,0.02)');
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,WIDTH,HEIGHT);

    // draw grid bubbles
    for(let r=0;r<ROWS;r++){
      for(let c=0;c<COLUMNS;c++){
        const cell = grid[r][c];
        const pos = gridToPixel(r,c);
        if(cell !== EMPTY){
          drawBubble(pos.x,pos.y,cell.color);
        } else {
          // optionally show faint placeholder for empty spots (disabled for clarity)
        }
      }
    }

    // draw shooter aim line
    ctx.beginPath();
    ctx.moveTo(WIDTH/2, HEIGHT - 60);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.strokeStyle = 'rgba(100,70,160,0.08)';
    ctx.stroke();

    // draw shooter and next bubble
    if(shooter){
      drawBubble(shooter.x, shooter.y, shooter.color);
    } else {
      // no shooter? spawn
      spawnShooter();
    }

    // preview next bubble at bottom-left
    drawBubble(60, HEIGHT - 35, nextColor, 1);
    ctx.fillStyle = '#2b2540';
    ctx.font = '12px Inter, Arial';
    ctx.fillText('Next', 45, HEIGHT - 10);

    // HUD: score already via DOM
  }

  function loop(){
    update();
    draw();
    animationId = requestAnimationFrame(loop);
  }

  // ----- Input -----
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width);
    mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height);
  });

  canvas.addEventListener('click', e => {
    if(gameOver) return;
    // click fires
    const rect = canvas.getBoundingClientRect();
    const tx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const ty = (e.clientY - rect.top) * (canvas.height / rect.height);
    fireAt(tx, ty);
  });

  // touch support: tap to fire, move to aim
  canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    const t = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const tx = (t.clientX - rect.left) * (canvas.width / rect.width);
    const ty = (t.clientY - rect.top) * (canvas.height / rect.height);
    mouse.x = tx; mouse.y = ty;
    fireAt(tx,ty);
  }, {passive:false});

  canvas.addEventListener('touchmove', e => {
    const t = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    mouse.x = (t.clientX - rect.left) * (canvas.width / rect.width);
    mouse.y = (t.clientY - rect.top) * (canvas.height / rect.height);
  });

  // music toggle
  musicToggle.addEventListener('click', () => {
    if(music.paused){
      music.play().catch(()=>{}); // browsers may block autoplay
      musicToggle.textContent = 'Pause Music';
    } else {
      music.pause();
      musicToggle.textContent = 'Play Music';
    }
  });

  // ----- Init -----
  function init(){
    createGrid();
    spawnShooter();
    score = 0;
    scoreEl.textContent = `Score: ${score}`;
    loop();
  }

  init();

  // expose for debugging (optional)
  window._bs = {grid, spawnShooter, createGrid};

})();
