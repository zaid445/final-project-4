// Add comments explaining each line of code
// Add a purchase confirmation button to the UI
const product = [
    {
      id: 0,
      image: 'https://isto.pt/cdn/shop/files/Classic_T-shirt_Black_1_4b42b483-c2cf-46f6-805c-90bd905b4338.webp?v=1685716490',
      title: 'T-Shirt 1',
      price: 20,
      sizes: ["S", "M", "L"]

    },
    {
      id: 1,
      image: 'https://contents.mediadecathlon.com/p2606947/k$1c9e0ffdefc3e67bdeabc82be7893e93/men-s-running-t-shirt-red-decathlon-8771124.jpg?f=1920x0&format=auto',
      title: 'T-Shirt 2',
      price: 25,
      sizes: ["S", "M", "L"]

    },
    {
      id: 2,
      image: 'https://printmytee.in/wp-content/uploads/2021/07/Product-Your-Design-Here-01-1.jpg',
      title: 'T-Shirt 3',
      price: 30,
      sizes: ["S", "M", "L"]

    },
    {
      id: 3,
      image: 'https://media.azadea.com/i/davinci/A7_IC9349_ONE__A701_ONE__101__01?$prd_large$',
      title: 'T-Shirt 4',
      price: 35,
      sizes: ["S", "M", "L"]

    },
    {
        id: 4,
        image: 'https://static.srpcdigital.com/styles/1037xauto/public/2019/01/16/last-170118-2.jpg.webp',
        title: 'shoes-1',
        price: 54,
        sizes: ["S", "M", "L"]

    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/proxy/svoaZeOjxa7_E2fNg1fjrxeJ92Cs3dr56Y-XXBf87f6FbHM986jWKoGQQPNIEZ7LJo0M38H-EFvWUcvGk1joSGgAB8_29krYO8ZMmQbnYlgolR2pS7TQecST2CoKtQy4Lie5Inmu2jrbm4InCzAbr_LW9eYI6G0WRlcTCQ',
      title: 'shoes-2',
      price: 49,
      sizes: ["S", "M", "L"]

    },
    {
      id: 6,
      image: 'https://me.asics.com/media/catalog/product/cache/a4e9c7e287ff847161f55e4ae29fd068/1/0/1011b956-001-1.jpg',
      title: 'shoes-3',
      price: 30,
      sizes: ["S", "M", "L"]

    },
    {
      id: 7,
      image: 'https://cdn.salla.sa/RqVqP/JqbkwRseCqmyWxd1reysSLEIehFWcEoFSxNEUSta.jpg',
      title: ' shoes-4 ',
      price: 75,
      sizes: ["S", "M", "L"]

    },
    {
      id: 8,
      image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202205/18/00103990201968____1__1200x1200.jpg',
      title: 'hat-1',
      price: 10,
      sizes: ["S", "M", "L"]

    },
    {
      id: 9,
      image: 'https://m.media-amazon.com/images/I/71tKXRvS9IL._AC_SL1500_.jpg',
      title: ' hat-2',
      price: 15,
      sizes: ["S", "M", "L"]

    },

    {
        id: 10,
        image: 'https://i.ebayimg.com/images/g/rw4AAOSwXFVlzegX/s-l1200.jpg',
        title: ' bag-1',
        price: 35,
        sizes: ["S", "M", "L"]

    },
    {
        id: 11,
        image: 'https://rukminim2.flixcart.com/image/850/1000/l59xq4w0/sling-bag/s/o/m/fashion-women-crossbody-purse-bag-shoulder-bag-classic-solid-original-imagfzg3vexhvfgg.jpeg?q=20&crop=false',
        title: ' bag-2',
        price: 45,
        sizes: ["S", "M", "L"]

    },
    {
        id: 12,
        image: 'https://www.brandedgifts.ng/wp-content/uploads/2018/12/Laptop-Bag-Backpack_Original.jpg',
        title: ' bag-3',
        price: 55,
        sizes: ["S", "M", "L"]

    },
    {
        id: 13,
        image: 'https://www.matthews.com.ph/cdn/shop/products/Cameron_Black_1_768x.jpg?v=1644475858',
        title: ' bag-4',
        price: 25,
        sizes: ["S", "M", "L"]

    },
    {
        id: 14,
        image: 'https://hunterselement.com.au/cdn/shop/files/FieldPants-Main-Tussock-RGB_54e84f7e-0b62-46cf-86e4-d21c1c9a73b0_1200x.jpg?v=1710449044',
        title: ' pants-1',
        price: 35,
        sizes: ["S", "M", "L"]

    },
    {
        id: 15,
        image: 'https://hooke.com/cdn/shop/files/HOOKE-W-TP-DSB-1.webp?v=1708720548&width=2500',
        title: ' pants-2',
        price: 45,
        sizes: ["S", "M", "L"]

    },
    {
        id: 16,
        image: 'https://img.cdn.mountainwarehouse.com/product/022703/022703_bla_active_kids_trouser_kid_ss24_01.jpg?w=500',
        title: ' pants-3',
        price: 55,
        sizes: ["S", "M", "L"]

    },
    {
        id: 17,
        image: 'https://columbiasportswear.ph/cdn/shop/files/1000450969_01.jpg?v=1695895408',
        title: ' pants-4',
        price: 25,
        sizes: ["S", "M", "L"]

    }
  ];
  
 // Generate product list with a fixed image but selectable sizes
// This code dynamically generates product cards and inserts them into the HTML element with id 'root'
document.getElementById('root').innerHTML = product.map(item => {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src="${item.image}" />
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$${item.price}.00</h2>
                <label>Select Size:</label>
                <select id='size-${item.id}'>
                    ${item.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
                <button onclick='addToCart(${item.id})'>Add to Cart</button>
            </div>
        </div>
    `;
}).join('');

// Retrieve cart from local storage or initialize an empty array if not found
let cart = JSON.parse(localStorage.getItem('cart')) || [];
displayCart();

// Function to add a product to the cart
function addToCart(productId) {
    const selectedSize = document.getElementById(`size-${productId}`).value; // Get selected size
    const productItem = product.find(item => item.id === productId); // Find the product by ID
    
    // Create a new cart item with the selected size
    const cartItem = { ...productItem, selectedSize };
    cart.push(cartItem);
    
    // Store the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Refresh the cart display
}

// Function to remove an item from the cart
function deleteItem(index) {
    cart.splice(index, 1); // Remove item from the array by index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCart(); // Refresh the cart display
}

// Function to display cart items
function displayCart() {
    let total = 0; // Initialize total price
    document.getElementById("count").innerText = cart.length; // Update cart count indicator
    
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerText = "$ 0.00"; // Set total price to 0 if cart is empty
    } else {
        // Generate cart item list
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            total += item.price; // Calculate total price
            return `
                <div class='cart-item'>
                    <img src="${item.image}" width="50" height="50">
                    <p>${item.title} (Size: ${item.selectedSize})</p>
                    <h2>$${item.price}.00</h2>
                    <i class='bx bxs-trash-alt' onclick='deleteItem(${index})' style='width:10px; font-size:20px;'></i>
                </div>
            `;
        }).join('');
        document.getElementById("total").innerText = "$ " + total + ".00"; // Display total price
    }
}
// // Ensure that the code works after the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
   // Add a "Confirm Purchase" button only if it doesn't already exist
    if (!document.getElementById('confirm-purchase')) {
         // Ensure that the "cart-controls" element exists on the page
        const cartControls = document.getElementById('cart-controls');
        if (cartControls) {
            cartControls.innerHTML += `<button id='confirm-purchase'>Confirm Purchase</button>`;

// Add the event to the new button
            document.getElementById('confirm-purchase').addEventListener('click', confirmPurchase);
        } else {
            console.error("Error: 'cart-controls' element not found in the HTML.");
        }
    }
});

// Add the event to the new button
function confirmPurchase() {
    cart = []; // Empty the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update the local storage
    displayCart(); // Update the cart display
    alert("✅ Thank you for your purchase! Your cart is now empty."); // Show a confirmation message
}
