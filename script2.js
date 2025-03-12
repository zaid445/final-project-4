// Function to search for a dish using the MealDB API
async function searchDish() {
    const dishName = document.getElementById("dish-name").value;
    if (!dishName) return alert("Please enter a dish name");
    
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`;
    
    try {
        const response = await fetch(apiUrl); // Fetch dish data from the API
        const data = await response.json();
        
        if (data.meals) {
            displayDishDetails(data.meals[0]); // Display the first matching dish
        } else {
            document.getElementById("dish-details").innerHTML = "<p>Dish not found</p>";
        }
    } catch (error) {
        console.error("Error fetching dish details:", error);
    }
}

// Function to display dish details
function displayDishDetails(meal) {
    document.getElementById("dish-details").innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Origin:</strong> ${meal.strArea}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
            ${getIngredients(meal)} <!-- Generate and display ingredients -->
        </ul>
        <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0, 200)}...</p>
    `;
}

// Function to get and format ingredients list
function getIngredients(meal) {
    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li>${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`;
        }
    }
    return ingredients;
}

// Get elements for menu and favorites
const menuContainer = document.getElementById("menu-container");
const favoritesList = document.getElementById("favorites-list");
const favoritesModal = document.getElementById("favorites-modal");

// Retrieve favorites from local storage or initialize an empty array
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to fetch and display menu items
async function fetchMenu() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"); // Fetch beef dishes
    const data = await response.json();
    displayMenu(data.meals);
}

// Function to display menu items
function displayMenu(meals) {
    menuContainer.innerHTML = "";
    meals.forEach(meal => {
        const dishHTML = `
           <div class="row">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <p>Delicious grilled dish made with love.</p>
                <div class="in-text">
                    <div class="price">
                        <h6>$${(Math.random() * (50 - 20) + 20).toFixed(2)}</h6> <!-- Random price -->
                    </div>
                    <button class="fav-btn ${favorites.includes(meal.idMeal) ? "active" : ""}" 
                        data-id="${meal.idMeal}"
                        onclick="toggleFavorite('${meal.idMeal}', '${meal.strMeal}', '${meal.strMealThumb}', this)">
                        ${favorites.some(fav => fav.id === meal.idMeal) ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>
            </div>
        `;
        menuContainer.innerHTML += dishHTML; // Append each dish to the menu
    });
}

// Function to update favorite buttons based on stored favorites
function updateFavoriteButtons() {
    document.querySelectorAll(".fav-btn").forEach(button => {
        let id = button.getAttribute("data-id");
        let isFavorite = favorites.some(fav => fav.id === id);

        if (isFavorite) {
            button.classList.add("active");
            button.innerText = "Remove from Favorites";
        } else {
            button.classList.remove("active");
            button.innerText = "Add to Favorites";
        }
    });
}

// Function to add or remove a dish from favorites
function toggleFavorite(id, name, image, button) {
    let index = favorites.findIndex(fav => fav.id === id);
    
    if (index === -1) {
        favorites.push({ id, name, image }); // Add to favorites
        button.classList.add("active");
        button.innerText = "Remove from Favorites";
    } else {
        favorites.splice(index, 1); // Remove from favorites
        button.classList.remove("active");
        button.innerText = "Add to Favorites";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites)); // Save favorites to local storage
}

// Ensure favorite buttons are updated when the page loads
document.addEventListener("DOMContentLoaded", updateFavoriteButtons);

// Function to show favorite dishes in a modal
function showFavorites() {
  favoritesList.innerHTML = "";
  if (favorites.length === 0) {
      favoritesList.innerHTML = "<p>No favorite dishes yet.</p>";
  } else {
      favorites.forEach(fav => {
          favoritesList.innerHTML += `
              <div class="row">
                  <img src="${fav.image}" alt="${fav.name}">
                  <h3>${fav.name}</h3>
              </div>
          `;
      });
  }
  favoritesModal.style.display = "flex"; // Show modal
}

// Function to close the favorites modal
function closeFavorites() {
    favoritesModal.style.display = "none";
}

// Fetch the menu items when the page loads
fetchMenu();

// Booking form event listener for table reservation
document.getElementById("booking-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get form input values
  const name = document.getElementById("name").value;
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Generate and display booking confirmation message
  const confirmationMessage = `Thank you, ${name}! Your table for ${guests} guests on ${date} at ${time} has been reserved.`;
  
  document.getElementById("confirmation-message").textContent = confirmationMessage;
  document.getElementById("booking-form").reset(); // Reset form fields after submission
});
