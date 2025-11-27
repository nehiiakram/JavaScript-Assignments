// Furniture Data (Fully filled for all 4 categories)
var furniture = {
    Bedroom: {
        Bed: {
            Modern: { name: 'Modern Bed', price: 50000, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVKnYb8d6x1Dpp3hTSMEuPJQLpY0OxT8quQ&s', description: 'Experience contemporary comfort with our Modern Bed. Sleek lines, premium finish, and durable craftsmanship make it perfect for a stylish bedroom.' },
            Classic: { name: 'Classic Bed', price: 45000, src: 'https://www.shutterstock.com/image-photo/classic-bedroom-interior-modern-bed-600nw-757413100.jpg', description: 'Designed for modern living, this Classic Bed combines style and functionality. Strong frame, easy-to-maintain surfaces, and a cozy design.' },
            Luxury: { name: 'Luxury Bed', price: 65000, src: 'https://www.royalzig.com/uploads/2025/06/bed-and-bedroom-set.webp', description: 'Upgrade your bedroom with this Modern Bed featuring a minimalist design, sturdy frame, and soft upholstered headboard for ultimate relaxation..' },
            Vintage: { name: 'Vintage Bed', price: 55000, src: 'https://cf.ltkcdn.net/antiques/images/orig/266623-2118x1412-old-fashion-master-bedroom.jpg', description: 'Classic design meets timeless elegance.Bring timeless charm with this Vintage Bed. Intricate carvings, rich finishes, and classic design make it a centerpiece of your bedroom.' }
        },
        Sofa: {
            Modern: { name: 'Modern Sofa', price: 40000, src: 'https://homefactree.com/wp-content/uploads/2018/08/FB_IMG_1528149328744.jpg', description: 'Experience the perfect blend of style and comfort with this Modern Sofa. Featuring clean lines, premium upholstery, and a sturdy frame, it’s ideal for contemporary living spaces where relaxation meets elegance.”.' },
            Classic: { name: 'Classic Sofa', price: 38000, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdhtjzb3lWkuKNV67rT44BRxB2cgqNT3nOQ&s', description: '“This Elegant Classic Sofa combines traditional design with ultimate comfort. Featuring soft, durable upholstery and refined detailing.' },
            Luxury: { name: 'Luxury Sofa', price: 50000, src: 'https://watanfurnitures.com/wp-content/uploads/2024/09/1000278470.jpg', description: '“Experience luxury and elegance with this Designer Sofa. Crafted with high-quality materials, plush cushions, and refined finishes.' },
            Vintage: { name: 'Vintage Sofa', price: 42000, src: 'https://www.royalzig.com/uploads/cache/cache-antique-sofa-set.jpg', description: '“Bring a touch of nostalgia to your living space with this Vintage Sofa. Featuring intricate craftsmanship, rich upholstery, and a classic design, it creates a warm, elegant.' }
        },
        Table: {
            Modern: { name: 'Modern Table', price: 20000, src: 'https://via.placeholder.com/250x150', description: 'Sleek modern table.' },
            Classic: { name: 'Classic Table', price: 18000, src: 'https://via.placeholder.com/250x150', description: 'Elegant classic table.' },
            Luxury: { name: 'Luxury Table', price: 25000, src: 'https://via.placeholder.com/250x150', description: 'Luxurious designer table.' },
            Vintage: { name: 'Vintage Table', price: 22000, src: 'https://via.placeholder.com/250x150', description: 'Vintage style table.' }
        },
        'Dressing Table': {
            Modern: { name: 'Modern Dressing Table', price: 30000, src: 'https://via.placeholder.com/250x150', description: 'Sleek modern dressing table.' },
            Classic: { name: 'Classic Dressing Table', price: 28000, src: 'https://via.placeholder.com/250x150', description: 'Elegant classic dressing table.' },
            Luxury: { name: 'Luxury Dressing Table', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Luxurious designer dressing table.' },
            Vintage: { name: 'Vintage Dressing Table', price: 32000, src: 'https://via.placeholder.com/250x150', description: 'Vintage style dressing table.' }
        }
    },

    LivingRoom: {
        Bed: {
            Modern: { name: 'Modern Living Bed', price: 40000, src: 'https://via.placeholder.com/250x150', description: 'Modern living room bed.' },
            Classic: { name: 'Classic Living Bed', price: 38000, src: 'https://via.placeholder.com/250x150', description: 'Classic living room bed.' },
            Luxury: { name: 'Luxury Living Bed', price: 50000, src: 'https://via.placeholder.com/250x150', description: 'Luxury living room bed.' },
            Vintage: { name: 'Vintage Living Bed', price: 42000, src: 'https://via.placeholder.com/250x150', description: 'Vintage living room bed.' }
        },
        Sofa: {
            Modern: { name: 'Modern Living Sofa', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Modern living sofa.' },
            Classic: { name: 'Classic Living Sofa', price: 33000, src: 'https://via.placeholder.com/250x150', description: 'Classic living sofa.' },
            Luxury: { name: 'Luxury Living Sofa', price: 45000, src: 'https://via.placeholder.com/250x150', description: 'Luxury living sofa.' },
            Vintage: { name: 'Vintage Living Sofa', price: 40000, src: 'https://via.placeholder.com/250x150', description: 'Vintage living sofa.' }
        },
        Table: {
            Modern: { name: 'Modern Living Table', price: 22000, src: 'https://via.placeholder.com/250x150', description: 'Modern living table.' },
            Classic: { name: 'Classic Living Table', price: 20000, src: 'https://via.placeholder.com/250x150', description: 'Classic living table.' },
            Luxury: { name: 'Luxury Living Table', price: 28000, src: 'https://via.placeholder.com/250x150', description: 'Luxury living table.' },
            Vintage: { name: 'Vintage Living Table', price: 25000, src: 'https://via.placeholder.com/250x150', description: 'Vintage living table.' }
        },
        'Dressing Table': {
            Modern: { name: 'Modern Living Dressing', price: 30000, src: 'https://via.placeholder.com/250x150', description: 'Modern living dressing table.' },
            Classic: { name: 'Classic Living Dressing', price: 28000, src: 'https://via.placeholder.com/250x150', description: 'Classic living dressing table.' },
            Luxury: { name: 'Luxury Living Dressing', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Luxury living dressing table.' },
            Vintage: { name: 'Vintage Living Dressing', price: 32000, src: 'https://via.placeholder.com/250x150', description: 'Vintage living dressing table.' }
        }
    },

    OfficeFurniture: {
        Bed: {
            Modern: { name: 'Modern Office Bed', price: 40000, src: 'https://via.placeholder.com/250x150', description: 'Modern office bed.' },
            Classic: { name: 'Classic Office Bed', price: 38000, src: 'https://via.placeholder.com/250x150', description: 'Classic office bed.' },
            Luxury: { name: 'Luxury Office Bed', price: 60000, src: 'https://via.placeholder.com/250x150', description: 'Luxury office bed.' },
            Vintage: { name: 'Vintage Office Bed', price: 50000, src: 'https://via.placeholder.com/250x150', description: 'Vintage office bed.' }
        },
        Sofa: {
            Modern: { name: 'Modern Office Sofa', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Modern office sofa.' },
            Classic: { name: 'Classic Office Sofa', price: 33000, src: 'https://via.placeholder.com/250x150', description: 'Classic office sofa.' },
            Luxury: { name: 'Luxury Office Sofa', price: 45000, src: 'https://via.placeholder.com/250x150', description: 'Luxury office sofa.' },
            Vintage: { name: 'Vintage Office Sofa', price: 40000, src: 'https://via.placeholder.com/250x150', description: 'Vintage office sofa.' }
        },
        Table: {
            Modern: { name: 'Modern Office Table', price: 20000, src: 'https://via.placeholder.com/250x150', description: 'Modern office table.' },
            Classic: { name: 'Classic Office Table', price: 18000, src: 'https://via.placeholder.com/250x150', description: 'Classic office table.' },
            Luxury: { name: 'Luxury Office Table', price: 25000, src: 'https://via.placeholder.com/250x150', description: 'Luxury office table.' },
            Vintage: { name: 'Vintage Office Table', price: 22000, src: 'https://via.placeholder.com/250x150', description: 'Vintage office table.' }
        },
        'Dressing Table': {
            Modern: { name: 'Modern Office Dressing', price: 30000, src: 'https://via.placeholder.com/250x150', description: 'Modern office dressing table.' },
            Classic: { name: 'Classic Office Dressing', price: 28000, src: 'https://via.placeholder.com/250x150', description: 'Classic office dressing table.' },
            Luxury: { name: 'Luxury Office Dressing', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Luxury office dressing table.' },
            Vintage: { name: 'Vintage Office Dressing', price: 32000, src: 'https://via.placeholder.com/250x150', description: 'Vintage office dressing table.' }
        }
    },

    DiningRoom: {
        Bed: {
            Modern: { name: 'Modern Dining Bed', price: 40000, src: 'https://via.placeholder.com/250x150', description: 'Modern dining room bed.' },
            Classic: { name: 'Classic Dining Bed', price: 38000, src: 'https://via.placeholder.com/250x150', description: 'Classic dining room bed.' },
            Luxury: { name: 'Luxury Dining Bed', price: 50000, src: 'https://via.placeholder.com/250x150', description: 'Luxury dining room bed.' },
            Vintage: { name: 'Vintage Dining Bed', price: 42000, src: 'https://via.placeholder.com/250x150', description: 'Vintage dining room bed.' }
        },
        Sofa: {
            Modern: { name: 'Modern Dining Sofa', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Modern dining sofa.' },
            Classic: { name: 'Classic Dining Sofa', price: 33000, src: 'https://via.placeholder.com/250x150', description: 'Classic dining sofa.' },
            Luxury: { name: 'Luxury Dining Sofa', price: 45000, src: 'https://via.placeholder.com/250x150', description: 'Luxury dining sofa.' },
            Vintage: { name: 'Vintage Dining Sofa', price: 40000, src: 'https://via.placeholder.com/250x150', description: 'Vintage dining sofa.' }
        },
        Table: {
            Modern: { name: 'Modern Dining Table', price: 22000, src: 'https://via.placeholder.com/250x150', description: 'Modern dining table.' },
            Classic: { name: 'Classic Dining Table', price: 20000, src: 'https://via.placeholder.com/250x150', description: 'Classic dining table.' },
            Luxury: { name: 'Luxury Dining Table', price: 28000, src: 'https://via.placeholder.com/250x150', description: 'Luxury dining table.' },
            Vintage: { name: 'Vintage Dining Table', price: 25000, src: 'https://via.placeholder.com/250x150', description: 'Vintage dining table.' }
        },
        'Dressing Table': {
            Modern: { name: 'Modern Dining Dressing', price: 30000, src: 'https://via.placeholder.com/250x150', description: 'Modern dining dressing table.' },
            Classic: { name: 'Classic Dining Dressing', price: 28000, src: 'https://via.placeholder.com/250x150', description: 'Classic dining dressing table.' },
            Luxury: { name: 'Luxury Dining Dressing', price: 35000, src: 'https://via.placeholder.com/250x150', description: 'Luxury dining dressing table.' },
            Vintage: { name: 'Vintage Dining Dressing', price: 32000, src: 'https://via.placeholder.com/250x150', description: 'Vintage dining dressing table.' }
        }
    }
};

// DOM Elements
var categoryMenu = document.getElementById('categoryMenu');
var itemMenu = document.getElementById('itemMenu');
var optionMenu = document.getElementById('optionMenu');
var allProducts = document.getElementById('allProducts');

// Populate Category Dropdown
for (var cat in furniture) {
    categoryMenu.innerHTML += `<option value="${cat}">${cat}</option>`;
}

// Helper: Create Card HTML
function createCardHTML(product) {
    return `<div class="col-md-3 mb-4">
    <div class="card">
      <img src="${product.src}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-footer">
        Rs.${product.price}/-
      </div>
    </div>
  </div>`;
}

// Display All Products initially
function displayAllProducts() {
    allProducts.innerHTML = '';
    for (var cat in furniture) {
        for (var item in furniture[cat]) {
            for (var design in furniture[cat][item]) {
                let product = furniture[cat][item][design];
                if (!product || Object.keys(product).length === 0) continue;
                allProducts.innerHTML += createCardHTML(product);
            }
        }
    }
}

// Initial Load
displayAllProducts();

// Dropdown Functions
function categoryChange() {
    itemMenu.innerHTML = `<option selected>Select Item</option>`;
    optionMenu.innerHTML = `<option selected>Select Design</option>`;
    let items = furniture[categoryMenu.value];
    for (var item in items) {
        itemMenu.innerHTML += `<option value="${item}">${item}</option>`;
    }
    displayAllProducts();
}

function itemChange() {
    optionMenu.innerHTML = `<option selected>Select Design</option>`;
    let designs = furniture[categoryMenu.value][itemMenu.value];
    for (var design in designs) {
        optionMenu.innerHTML += `<option value="${design}">${design}</option>`;
    }
    displayAllProducts();
}

function showProduct() {
    allProducts.innerHTML = '';
    let product = furniture[categoryMenu.value][itemMenu.value][optionMenu.value];
    if (!product || Object.keys(product).length === 0) return;
    allProducts.innerHTML += createCardHTML(product);
}
