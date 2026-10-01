const movies = [
  {
    title: "The Flash",
    year: 2023,
    genre: "Action",
    rating: "7.0",
    image: "https://images.unsplash.com/photo-1518930259200-9c2e7b2a8a0b?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: "8.7",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: "9.0",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
  }
];

const grid = document.getElementById("movieGrid");
const search = document.getElementById("search");

function renderMovies() {
  if (!grid) return;

  const query = search ? search.value.toLowerCase() : "";

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  grid.innerHTML = filtered.map(movie => `
    <article class="movie">
      <div class="poster"
        style="background-image: url('${movie.image}')">
      </div>

      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.year} · ⭐ ${movie.rating}</p>
        <span>${movie.genre}</span>
      </div>
    </article>
  `).join("");
}

if (search) {
  search.addEventListener("input", renderMovies);
}

renderMovies();
