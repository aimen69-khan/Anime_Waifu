(function(){
  var WHATSAPP_NUMBER = "923432192177"; // Bob Burger, DHA Phase 7/2, Karachi

  var MENU = {
    burgers: [
      {id:"b1", name:"Bob's Smash Classic", desc:"Smashed beef patty, cheddar, house sauce, pickles.", price:650},
      {id:"b2", name:"Double Trouble", desc:"Double beef patty, double cheddar, caramelised onion.", price:950},
      {id:"b3", name:"Zinger Crunch", desc:"Crispy fried chicken fillet, spicy mayo, slaw.", price:700},
      {id:"b4", name:"Peri Peri Grilled", desc:"Flame-grilled chicken breast, peri-peri glaze.", price:750},
      {id:"b5", name:"Bob's Special Stack", desc:"Beef patty, chicken fillet, cheese, fried egg.", price:1100},
      {id:"b6", name:"Mushroom Swiss Melt", desc:"Beef patty, sautéed mushrooms, melted swiss.", price:850},
      {id:"b7", name:"BBQ Bacon Beef", desc:"Beef patty, beef bacon, smoky BBQ sauce, onion rings.", price:900},
      {id:"b8", name:"Spicy Chicken Rebel", desc:"Fiery fried chicken, jalapeños, chipotle mayo.", price:750},
      {id:"b9", name:"Veggie Delight", desc:"Grilled vegetable patty, hummus, fresh greens.", price:600},
      {id:"b10", name:"Kids Slider Duo", desc:"Two mini beef sliders with cheese, perfect for kids.", price:500}
    ],
    sides: [
      {id:"s1", name:"Loaded Fries", desc:"Fries, cheese sauce, beef bits, jalapeños.", price:400},
      {id:"s2", name:"Classic Fries", desc:"Crispy golden fries, house seasoning.", price:250},
      {id:"s3", name:"Onion Rings", desc:"Beer-battered onion rings, chipotle dip.", price:300},
      {id:"s4", name:"Coleslaw", desc:"Fresh cabbage slaw, creamy dressing.", price:200},
      {id:"s5", name:"Cheesy Nuggets", desc:"Golden chicken nuggets stuffed with cheese.", price:350},
      {id:"s6", name:"Garlic Bread Bites", desc:"Toasted garlic bread, melted mozzarella.", price:280},
      {id:"s7", name:"Mac & Cheese Cup", desc:"Creamy baked mac and cheese.", price:380}
    ],
    drinks: [
      {id:"d1", name:"7Up", desc:"mint and lime.", price:150},
      {id:"d2", name:"Pepsi", desc:"Chilled can, assorted flavours.", price:150},
    ],
    desserts: [
      {id:"e1", name:"Chocolate Brownie", desc:"Warm fudge brownie, vanilla ice cream.", price:570},
    ]
  };

  var ICONS = {
    burgers: '<svg class="icn" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 20c0-8 7-13 16-13s16 5 16 13H8z" fill="currentColor"/><rect x="7" y="21" width="34" height="5" rx="2.5" fill="#F5EFE6"/><rect x="7" y="29" width="34" height="4" rx="2" fill="#C0392B"/><path d="M7 35h34c0 4-4 7-9 7H16c-5 0-9-3-9-7z" fill="currentColor"/></svg>',
    sides: '<svg class="icn" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 44 10 16h28l-4 28a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z" fill="#E8A317"/><path d="M9 16h30l1-3a3 3 0 0 0-3-4H11a3 3 0 0 0-3 4z" fill="#F5EFE6"/><path d="M18 12l1-6M24 12V5M30 12l-1-6" stroke="#C0392B" stroke-width="2.5" stroke-linecap="round"/></svg>',
    drinks: '<svg class="icn" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 8h20l-3 34a3 3 0 0 1-3 3H20a3 3 0 0 1-3-3z" fill="#E8A317"/><rect x="12" y="6" width="24" height="5" rx="2" fill="#F5EFE6"/><path d="M17 18h14" stroke="#7A2E1D" stroke-width="2"/><path d="M26 3v6" stroke="#C0392B" stroke-width="2.5" stroke-linecap="round"/></svg>',
    desserts: '<svg class="icn" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6l4 8-4 4-4-4z" fill="#C0392B"/><path d="M10 20h28a2 2 0 0 1 2 2c0 8-8 14-16 14S8 30 8 22a2 2 0 0 1 2-2z" fill="#E8A317"/><rect x="14" y="38" width="20" height="4" rx="2" fill="#7A2E1D"/></svg>'
  };

  var CART_KEY = "bobBurgerCart";
  var cart = {}; // id -> {item, qty}
  var activeCat = "burgers";

  function saveCart(){
    try{
      var toSave = {};
      Object.keys(cart).forEach(function(id){ toSave[id] = cart[id].qty; });
      localStorage.setItem(CART_KEY, JSON.stringify(toSave));
    }catch(e){ /* storage unavailable, ignore */ }
  }

  function loadCart(){
    try{
      var raw = localStorage.getItem(CART_KEY);
      if (!raw) return;
      var saved = JSON.parse(raw);
      Object.keys(saved).forEach(function(id){
        var item = findItem(id);
        if (item && saved[id] > 0) cart[id] = {item:item, qty:saved[id]};
      });
    }catch(e){ /* storage unavailable or corrupt, start empty */ }
  }

  var grid = document.getElementById("menuGrid");
  var tabs = document.querySelectorAll(".tab");
  var cartCount = document.getElementById("cartCount");
  var cartItemsEl = document.getElementById("cartItems");
  var subtotalEl = document.getElementById("subtotal");
  var overlay = document.getElementById("overlay");
  var drawer = document.getElementById("cartDrawer");

  function renderMenu(){
    grid.innerHTML = "";
    MENU[activeCat].forEach(function(item){
      var el = document.createElement("div");
      el.className = "item";
      el.innerHTML =
        '<div class="item-img-wrap">' +
          '<img class="item-img" src="images/'+item.id+'.jpg" alt="'+item.name+'" loading="lazy" ' +
            'onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'item-img-fallback\',innerHTML:'+JSON.stringify(ICONS[activeCat])+'}));">' +
        '</div>' +
        '<h3>'+item.name+'</h3>' +
        '<p>'+item.desc+'</p>' +
        '<div class="item-foot"><span class="price">Rs '+item.price+'</span>' +
        '<button class="add" data-id="'+item.id+'">Add</button></div>';
      grid.appendChild(el);
    });
  }

  function findItem(id){
    for (var cat in MENU){
      var found = MENU[cat].find(function(i){ return i.id === id; });
      if (found) return found;
    }
  }

  function addToCart(id){
    var item = findItem(id);
    if (!item) return;
    if (!cart[id]) cart[id] = {item:item, qty:0};
    cart[id].qty++;
    renderCart();
    openDrawer();
  }

  function changeQty(id, delta){
    if (!cart[id]) return;
    cart[id].qty += delta;
    if (cart[id].qty <= 0) delete cart[id];
    renderCart();
  }

  function renderCart(){
    var ids = Object.keys(cart);
    var total = 0, count = 0;
    if (ids.length === 0){
      cartItemsEl.innerHTML = '<p class="empty">Your cart is empty. Add something tasty from the menu.</p>';
    } else {
      cartItemsEl.innerHTML = "";
      ids.forEach(function(id){
        var line = cart[id];
        total += line.item.price * line.qty;
        count += line.qty;
        var row = document.createElement("div");
        row.className = "cart-line";
        row.innerHTML =
          '<div><div class="ci-name">'+line.item.name+'</div><div class="ci-price">Rs '+line.item.price+' each</div></div>' +
          '<div class="qty">' +
            '<button data-act="dec" data-id="'+id+'" aria-label="Decrease quantity">−</button>' +
            '<span>'+line.qty+'</span>' +
            '<button data-act="inc" data-id="'+id+'" aria-label="Increase quantity">+</button>' +
          '</div>';
        cartItemsEl.appendChild(row);
      });
    }
    subtotalEl.textContent = "Rs " + total;
    if (count > 0){ cartCount.hidden = false; cartCount.textContent = count; }
    else { cartCount.hidden = true; }
    updateWaLinks(total, ids);
    saveCart();
  }

  function buildOrderMessage(){
    var ids = Object.keys(cart);
    if (ids.length === 0) return "Hi Bob Burger, I'd like to place an order.";
    var lines = ["Hi Bob Burger, I'd like to order:"];
    var total = 0;
    ids.forEach(function(id){
      var line = cart[id];
      total += line.item.price * line.qty;
      lines.push(line.qty + "x " + line.item.name + " - Rs " + (line.item.price * line.qty));
    });
    lines.push("Total: Rs " + total);
    lines.push("Delivery address: ");
    return lines.join("\n");
  }

  function updateWaLinks(total, ids){
    var msg = encodeURIComponent(buildOrderMessage());
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
    document.getElementById("checkoutBtn").href = url;
  }

  function setGenericWaLinks(){
    var genericMsg = encodeURIComponent("Hi Bob Burger, I'd like to place an order.");
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + genericMsg;
    ["headerWaBtn","heroWaBtn","locWaBtn"].forEach(function(id){
      document.getElementById(id).href = url;
    });
  }

  function openDrawer(){
    drawer.classList.add("show");
    overlay.classList.add("show");
  }
  function closeDrawer(){
    drawer.classList.remove("show");
    overlay.classList.remove("show");
  }

  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
      tabs.forEach(function(t){ t.setAttribute("aria-selected","false"); });
      tab.setAttribute("aria-selected","true");
      activeCat = tab.getAttribute("data-cat");
      renderMenu();
    });
  });

  grid.addEventListener("click", function(e){
    var btn = e.target.closest(".add");
    if (btn) addToCart(btn.getAttribute("data-id"));
  });

  cartItemsEl.addEventListener("click", function(e){
    var btn = e.target.closest("button[data-act]");
    if (!btn) return;
    var id = btn.getAttribute("data-id");
    changeQty(id, btn.getAttribute("data-act") === "inc" ? 1 : -1);
  });

  document.getElementById("cartOpenBtn").addEventListener("click", openDrawer);
  document.getElementById("cartCloseBtn").addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closeDrawer();
  });

  function setHoursPill(){
    var pill = document.getElementById("hoursPill");
    var hour = new Date().getHours();
    var open = hour >= 13; // opens 1 PM, roughly until 1 AM
    if (open){
      pill.textContent = "Open now · Until 1 AM";
      pill.className = "pill open";
    } else {
      pill.textContent = "Closed · Opens 1 PM";
      pill.className = "pill closed";
    }
  }

  renderMenu();
  loadCart();
  renderCart();
  setGenericWaLinks();
  setHoursPill();
})();