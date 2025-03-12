const movies = [
    {
    "id": 1,
    "title": "The Lord of the Rings: The Return of the King",
    "background": "https://m.media-amazon.com/images/S/pv-target-images/2c70c38075924358afbbf210cab6ddf9ebed7a9d47c87713c8759d5758b7dadb.jpg",
    "thumbnail": "https://m.media-amazon.com/images/I/A16Y9ujrw3L._AC_UF1000,1000_QL80_.jpg",
    "year": "2003",
    "ageRating": "PG-13",
    "duration": "3h 21min",
    "genre": "Adventure, Drama, Fantasy",
    "description": "The epic conclusion to the story of the One Ring as Frodo and Sam approach Mount Doom, with the fate of Middle-earth at stake."
},
    {
    "id": 2,
    "title": "Spider-Man: No Way Home",
    "background": "https://images.alphacoders.com/125/1250041.jpg",
    "thumbnail": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/389494131559049.62dd8ef746cd3.jpg",
    "year": "2021",
    "ageRating": "PG-13",
    "duration": "2h 28min",
    "genre": "Action, Adventure, Sci-Fi",
    "description": "Peter Parker seeks help from Doctor Strange to erase the memory of his secret identity from the world, leading to dangerous consequences."
},

{
"id": 3,
"title": "Top Gun: Maverick",
"background": "https://media.licdn.com/dms/image/v2/D5612AQG98IdkyV-GGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655225008484?e=2147483647&v=beta&t=NL1ah2OG9BMEv7y40uvVi8seyrZXC7Y-mBqZHMWt66w",
"thumbnail": "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg",
"year": "2022",
"ageRating": "PG-13",
"duration": "2h 11min",
"genre": "Action, Drama",
"description": "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him."
},
{
    "id": 4,
    "title": "Forrest Gump",
    "background": "https://images.squarespace-cdn.com/content/v1/62ceea4ed58a7120a198c234/38fd3a06-e1a2-46f2-a083-9540906211d3/ForrestGump3.png",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
    "year": "1994",
    "ageRating": "PG-13",
    "duration": "2h 22min",
    "genre": "Drama, Romance",
    "description": "The life story of Forrest Gump, a man with low intelligence who unwittingly influences several historical events in the 20th century."
},

    {
    "id": 5,
    "title": "Inception",
    "background": "https://wallpapers.com/images/hd/inception-movie-poster-dream-is-real-9ei1rpyath620n92.jpg",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    "year": "2010",
    "ageRating": "PG-13",
    "duration": "2h 28min",
    "genre": "Action, Adventure, Sci-Fi",
    "description": "A skilled thief who specializes in entering the dreams of others is tasked with planting an idea in a target's subconscious."
},
{
    "id": 6,
    "title": "The Godfather",
    "background": "https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=960&h=540",
    "thumbnail": "https://miro.medium.com/v2/resize:fit:1170/1*Gp-AhI3fuWvRRWz3YBpkaA.jpeg",
    "year": "1972",
    "ageRating": "R",
    "duration": "2h 55min",
    "genre": "Crime, Drama",
    "description": "The story of a powerful Italian-American crime family and their internal struggles as they navigate the criminal underworld."
},
{
    "id": 7,
    "title": "The Dark Knight",
    "background": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/03/the-dark-knight-2008-poster.jpg",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    "year": "2008",
    "ageRating": "PG-13",
    "duration": "2h 32min",
    "genre": "Action, Crime, Drama",
    "description": "Batman faces off against the Joker, a criminal mastermind who seeks to create chaos in Gotham City."
},

{
    "id": 8,
    "title": "Dune",
    "background": "https://www.thelance.org/wp-content/uploads/2021/12/Villeneuve-Dune-courtesy-of-TV-Insider-752x440-1.jpg",
    "thumbnail": "https://lozierinstitute.org/wp-content/uploads/2023/09/dune.webp",
    "year": "2021",
    "ageRating": "PG-13",
    "duration": "2h 35min",
    "genre": "Adventure, Drama, Sci-Fi",
    "description": "A young nobleman becomes embroiled in a war for control of the galaxys most valuable resource, the spice melange."
},


]


    // Add smooth scroll behavior for the movie cards container
    document.querySelector('.movie-cards-container').addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            document.querySelector('.movie-cards-container').scrollLeft += e.deltaY;
        }
    });

    // Rest of the JavaScript remains the same...
    function updateMovie(movie) {
        // Update background with fade effect
        const background = document.querySelector('.background');
        background.style.opacity = '0';
        
        setTimeout(() => {
            document.querySelector('.background img').src = movie.background;
            document.querySelector('.movie-title').textContent = movie.title;
            document.querySelector('.year').textContent = movie.year;
            document.querySelector('.age-rating').textContent = movie.ageRating;
            document.querySelector('.duration').textContent = movie.duration;
            document.querySelector('.genre').textContent = movie.genre;
            document.querySelector('.movie-description').textContent = movie.description;
            
            background.style.opacity = '1';
        }, 300);
    }

    function createMovieCards() {
        const container = document.querySelector('.movie-cards');
        container.innerHTML = '';
        
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `<img src="${movie.thumbnail}" alt="${movie.title}">`;
            
            card.addEventListener('click', () => {
                updateMovie(movie);
            });
            
            container.appendChild(card);
        });
    }

    // Initialize with first movie
    document.addEventListener('DOMContentLoaded', () => {
        updateMovie(movies[0]);
        createMovieCards();
    });





    const apiKey = "f77c6205";
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=action`;

async function getMovies() {
try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.Response === "True") {
        displayMovies(data.Search);
    } else {
        console.error("No movies found");
    }
} catch (error) {
    console.error("An error occurred while fetching data:", error);
}
}

function displayMovies(movies) {
const moviesContainer = document.getElementById("movies-list");
moviesContainer.innerHTML = "";

movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie-card");
    movieElement.innerHTML = `
        <a href="movie.html?id=${movie.imdbID}">
            <img src="${movie.Poster}" alt="${movie.Title}">
            
        </a>
    `;
    moviesContainer.appendChild(movieElement);
});
}

getMovies();










const comedyApiKey = "f77c6205";
const comedyApiUrl = `https://www.omdbapi.com/?apikey=${comedyApiKey}&s=comedy`;

async function fetchComedyMovies() {
try {
    const comedyResponse = await fetch(comedyApiUrl);
    const comedyData = await comedyResponse.json();
    if (comedyData.Response === "True") {
        renderComedyMovies(comedyData.Search);
    } else {
        console.error("No comedy movies found");
    }
} catch (error) {
    console.error("An error occurred while fetching comedy movie data:", error);
}
}

function renderComedyMovies(comedyMovies) {
const comedyMoviesContainer = document.getElementById("comedy-movies-list");
comedyMoviesContainer.innerHTML = "";

comedyMovies.forEach(comedyMovie => {
    const comedyMovieElement = document.createElement("div");
    comedyMovieElement.classList.add("comedy-movie-card");
    comedyMovieElement.innerHTML = `
        <a href="movie.html?id=${comedyMovie.imdbID}">
            <img src="${comedyMovie.Poster}" alt="${comedyMovie.Title}">
            
        </a>
    `;
    comedyMoviesContainer.appendChild(comedyMovieElement);
});
}

fetchComedyMovies();




const horrorApiKey = "f77c6205";
const horrorApiUrl = `https://www.omdbapi.com/?apikey=${horrorApiKey}&s=horror`;

async function fetchHorrorMovies() {
try {
    const horrorResponse = await fetch(horrorApiUrl);
    const horrorData = await horrorResponse.json();
    if (horrorData.Response === "True") {
        renderHorrorMovies(horrorData.Search); // ✅ تغيير التسمية هنا
    } else {
        console.error("No horror movies found");
    }
} catch (error) {
    console.error("An error occurred while fetching horror movie data:", error);
}
}

function renderHorrorMovies(horrorMovies) {
const horrorMoviesContainer = document.getElementById("horror-movies-list"); // ✅ تغيير المعرف هنا
horrorMoviesContainer.innerHTML = "";

horrorMovies.forEach(horrorMovie => { // ✅ تغيير التسمية هنا
    const horrorMovieElement = document.createElement("div");
    horrorMovieElement.classList.add("horror-movie-card"); // ✅ تغيير التسمية هنا
    horrorMovieElement.innerHTML = `
        <a href="movie.html?id=${horrorMovie.imdbID}">
            <img src="${horrorMovie.Poster}" alt="${horrorMovie.Title}">
           
        </a>
    `;
    horrorMoviesContainer.appendChild(horrorMovieElement);
});
}

fetchHorrorMovies(); // ✅ استدعاء الدالة المعدلة














const totalSeatsCount = 20;
const rowsCount = 4;
const seatsPerRowCount = totalSeatsCount / rowsCount;

// Ticket prices per row
const rowTicketPrices = {
1: 30,  // Row 1: $20
2: 20,  // Row 2: $15
3: 15,  // Row 3: $10
4: 8    // Row 4: $8
};

// استرجاع المقاعد المحجوزة من `localStorage`
let reservedSeats = JSON.parse(localStorage.getItem("reservedSeats")) || [1, 5, 10, 15];
let selectedSeatsList = [];
let totalAmount = 0;

function renderSeatsLayout() {
const seatsContainerElement = document.getElementById("seat-container-element");
seatsContainerElement.innerHTML = ""; // Clear previous seats

for (let rowIndex = 1; rowIndex <= rowsCount; rowIndex++) {
    const rowContainerElement = document.createElement("div");
    rowContainerElement.classList.add("row-container");

    // Add row label
    const rowLabelElement = document.createElement("p");
    rowLabelElement.classList.add("row-label-element");
    rowLabelElement.textContent = `Row ${rowIndex} - $${rowTicketPrices[rowIndex]} per seat`;
    rowContainerElement.appendChild(rowLabelElement);

    for (let seatIndex = 1; seatIndex <= seatsPerRowCount; seatIndex++) {
        const seatNumber = (rowIndex - 1) * seatsPerRowCount + seatIndex;
        const seatElement = document.createElement("div");
        seatElement.classList.add("seat-element");
        seatElement.textContent = seatNumber;

        if (reservedSeats.includes(seatNumber)) {
            seatElement.classList.add("booked");
        }
        seatElement.addEventListener("click", () => selectSeat(seatElement, seatNumber, rowIndex));
        rowContainerElement.appendChild(seatElement);
    }
    seatsContainerElement.appendChild(rowContainerElement);
}
}

function selectSeat(seatElement, seatNumber, rowIndex) {
if (seatElement.classList.contains("booked")) {
    alert("This seat is already booked.");
    return;
}

if (seatElement.classList.contains("selected")) {
    seatElement.classList.remove("selected");
    selectedSeatsList = selectedSeatsList.filter(seat => seat.seatNumber !== seatNumber);
} else {
    seatElement.classList.add("selected");
    selectedSeatsList.push({ seatNumber, price: rowTicketPrices[rowIndex] });
}

updateTotalAmount();
}

function updateTotalAmount() {
totalAmount = selectedSeatsList.reduce((sum, seat) => sum + seat.price, 0);
document.getElementById("total-price-text").textContent = `Total Price: $${totalAmount}`;
}

document.getElementById("book-tickets-button").addEventListener("click", () => {
if (selectedSeatsList.length > 0) {
    const seatNumbers = selectedSeatsList.map(seat => seat.seatNumber);
    alert(`Seats booked successfully: ${seatNumbers.join(", ")}\nTotal Price: $${totalAmount}`);
    
    // تحديث `localStorage` بحفظ المقاعد المحجوزة الجديدة
    reservedSeats = [...reservedSeats, ...seatNumbers];
    localStorage.setItem("reservedSeats", JSON.stringify(reservedSeats));

    // إعادة تحميل المقاعد
    selectedSeatsList = [];
    renderSeatsLayout();
    updateTotalAmount();
} else {
    alert("Please select at least one seat.");
}
});

renderSeatsLayout();









// Seat configuration
const totalSeats = 20;
const rows = 4;
const seatsPerRow = totalSeats / rows;

// Ticket prices per row
const ticketPrices = {
1: 20,  // Row 1: $20
2: 15,  // Row 2: $15
3: 10,  // Row 3: $10
4: 8    // Row 4: $8
};

// استرجاع المقاعد المحجوزة من `localStorage`
let bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [1, 5, 10, 15];
let selectedSeats = [];
let totalPrice = 0;

function renderSeats() {
const seatsContainer = document.getElementById("seats-container");
seatsContainer.innerHTML = ""; // Clear previous seats

for (let row = 1; row <= rows; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row");

    // Add row label
    const rowLabel = document.createElement("p");
    rowLabel.classList.add("row-label");
    rowLabel.textContent = `Row ${row} - $${ticketPrices[row]} per seat`;
    rowContainer.appendChild(rowLabel);

    for (let i = 1; i <= seatsPerRow; i++) {
        const seatNumber = (row - 1) * seatsPerRow + i;
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.textContent = seatNumber;

        if (bookedSeats.includes(seatNumber)) {
            seat.classList.add("booked");
        }
        seat.addEventListener("click", () => selectSeat(seat, seatNumber, row));
        rowContainer.appendChild(seat);
    }
    seatsContainer.appendChild(rowContainer);
}
}

function selectSeat(seat, seatNumber, row) {
if (seat.classList.contains("booked")) {
    alert("This seat is already booked.");
    return;
}

if (seat.classList.contains("selected")) {
    seat.classList.remove("selected");
    selectedSeats = selectedSeats.filter(s => s.seatNumber !== seatNumber);
} else {
    seat.classList.add("selected");
    selectedSeats.push({ seatNumber, price: ticketPrices[row] });
}

updateTotalPrice();
}

function updateTotalPrice() {
totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
document.getElementById("total-price").textContent = `Total Price: $${totalPrice}`;
}

document.getElementById("book-tickets").addEventListener("click", () => {
if (selectedSeats.length > 0) {
    const seatNumbers = selectedSeats.map(seat => seat.seatNumber);
    alert(`Seats booked successfully: ${seatNumbers.join(", ")}\nTotal Price: $${totalPrice}`);
    
    // تحديث `localStorage` بحفظ المقاعد المحجوزة الجديدة
    bookedSeats = [...bookedSeats, ...seatNumbers];
    localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats));

    // إعادة تحميل المقاعد
    selectedSeats = [];
    renderSeats();
    updateTotalPrice();
} else {
    alert("Please select at least one seat.");
}
});

renderSeats();



