const inputSearch = document.getElementById("search");
const searchButton = document.querySelector(".search-button");
const section = document.querySelector("section");


searchButton.addEventListener("click", async function () {
    section.innerHTML = '';
    if(inputSearch.value.length <=0 ) return section.innerHTML += `<p class='error'>Please enter a movie name<p>`
    await fetch(`https://www.omdbapi.com/?apikey=a683bfcc&t=${inputSearch.value}`)
    .then((res) => res.json())
    .then((res) => {
        if(res.Response == 'True') {
        console.log(res)
        let card = "";
        card += showMovie(res);
        section.innerHTML += card;
        } else if(res.Response == 'False') {
            section.innerHTML += `<p class='error'>${res.Error}<p>`
        }
    })
})

function showMovie(movie) {
    return `<div class="card">
                 <div class='upper'>
                  <div class="image">
                      <img src='${movie.Poster}' alt="poster not found">
                  </div>
                  <div class='title'>
                      <h6>${movie.Title}</h6>
                      <p class='year'>${movie.Year}</p>
                      <p class='ratings'>${movie.imdbRating}</p>
                      
                  </div>
                  </div>
                  <div class="relase">
                      <p><strong>Genre : </strong>${movie.Genre}</p>
                      <p><strong>Language : </strong>${movie.Language}</p>
                      <p><strong>Writer : </strong>${movie.Writer}</p>
                      <p><strong>Director : </strong>${movie.Director}</p>
                      <p><strong>Actors : </strong>${movie.Actors}</p>
                      <p><strong>Plot : </strong>${movie.Plot}</p>
                      <p><strong>Awards : </strong>${movie.Awards}</p>
                  </div>
                  <div class="button">
                  </div>
              </div>`;
  } 
