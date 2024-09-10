const apiKey = 'c7deecc0'; // Replace with your OMDb API key

// OMDb Base URL
const baseUrl = 'https://www.omdbapi.com/';

// Function to fetch movies by genre
async function fetchMoviesByTitle(title, sectionId) {
  const response = await fetch(`${baseUrl}?s=${title}&apikey=${apiKey}`);
  const data = await response.json();

  if (data.Response === "True") {
    const movieGrid = document.getElementById(sectionId);

    // Loop through the movie results and create an image element for each
    data.Search.forEach(movie => {
      const imgElement = document.createElement('img');
      imgElement.src = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150';
      imgElement.alt = movie.Title;
      movieGrid.appendChild(imgElement);
    });
  } else {
    console.log(`No results found for ${title}`);
  }
}

// Fetch different genres
fetchMoviesByTitle('Action', 'action-movies');     // Action Movies
fetchMoviesByTitle('Adventure', 'adventure-movies'); // Adventure Movies
fetchMoviesByTitle('Comedy', 'comedy-movies');     // Comedy Movies

// Fetch a featured movie for the banner section
async function fetchFeaturedMovie() {
  const response = await fetch(`${baseUrl}?t=Inception&apikey=${apiKey}`); // Example: Inception as the featured movie
  const data = await response.json();

  if (data.Response === "True") {
    const bannerTitle = document.getElementById('banner-title');
    const bannerDescription = document.getElementById('banner-description');

    bannerTitle.textContent = data.Title;
    bannerDescription.textContent = data.Plot;
  } else {
    console.log("No results found for the featured movie");
  }
}

fetchFeaturedMovie();
