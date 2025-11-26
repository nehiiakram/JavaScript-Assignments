// ================================
// 🌸 Post App - Full JavaScript
// ================================

// Default DP
let dpURL = "https://via.placeholder.com/40";
let posts = [];

// Get user info from localStorage
const userName = localStorage.getItem('userName') || "User";
const userEmail = localStorage.getItem('userEmail') || "";

// ================================
// 🖼️ DP Upload System (Navbar)
// ================================
document.getElementById('changeDpBtn')?.addEventListener('click', () => {
  document.getElementById('navDpInput').click();
});

document.getElementById('navDpInput')?.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      dpURL = ev.target.result;
      document.getElementById('navDp').src = dpURL;
      // DP ko localStorage me save karo (taaki refresh ke baad bhi rahe)
      localStorage.setItem('userDP', dpURL);
    };
    reader.readAsDataURL(file);
  }
});

// Load saved DP if available
window.addEventListener('DOMContentLoaded', () => {
  const savedDP = localStorage.getItem('userDP');
  if (savedDP) {
    dpURL = savedDP;
    const navDp = document.getElementById('navDp');
    if (navDp) navDp.src = dpURL;
  }
});

// ================================
// 📝 Post Creation Section
// ================================
const postForm = document.getElementById('postForm');
const postsDiv = document.getElementById('posts');

// Load saved posts if available
window.addEventListener('DOMContentLoaded', () => {
  const savedPosts = localStorage.getItem('posts');
  if (savedPosts) {
    posts = JSON.parse(savedPosts);
    renderPosts();
  }
});

postForm?.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const color = document.getElementById('postColor').value;
  const time = new Date().toLocaleString();

  const post = {
    id: Date.now(),
    title,
    desc,
    color,
    time,
    dp: dpURL,
    name: userName,
    email: userEmail
  };

  posts.push(post);
  savePosts();
  renderPosts();
  postForm.reset();
});

// ================================
// 🔁 Render All Posts
// ================================
function renderPosts() {
  postsDiv.innerHTML = '';
  posts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'post-card shadow-sm mb-3';
    div.style.backgroundColor = p.color;

    div.innerHTML = `
      <div class="post-header mb-2">
        <img src="${p.dp}" alt="DP">
        <div>
          <strong>${p.name}</strong><br>
          <span class="post-time">${p.time}</span><br>
          ${p.email ? `<small class="text-muted">${p.email}</small>` : ''}
        </div>
      </div>
      <h5>${p.title}</h5>
      <p>${p.desc}</p>
      <div>
        <button class="btn btn-sm btn-outline-dark me-2" onclick="editPost(${p.id})">Edit</button>
        <button class="btn btn-sm btn-outline-danger" onclick="deletePost(${p.id})">Delete</button>
      </div>
    `;
    postsDiv.appendChild(div);
  });
}

// ================================
// 🗑️ Delete Post
// ================================
function deletePost(id) {
  posts = posts.filter(p => p.id !== id);
  savePosts();
  renderPosts();
}

// ================================
// ✏️ Edit Post
// ================================
function editPost(id) {
  const p = posts.find(post => post.id === id);
  if (p) {
    document.getElementById('title').value = p.title;
    document.getElementById('desc').value = p.desc;
    document.getElementById('postColor').value = p.color;
    deletePost(id);
    window.scrollTo(0, 0);
  }
}

// ================================
// 💾 Save Posts in localStorage
// ================================
function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}
