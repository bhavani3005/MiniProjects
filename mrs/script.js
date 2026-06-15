const movies = [
  { title: "Inception", genre: "action", language: "english", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.V1_FMjpg_UX1000.jpg", video: "https://www.youtube.com/embed/YoHD9XEInc0", synopsis: "A thief steals secrets from dreams." },
  { title: "Captain America", genre: "action", language: "english", poster: "https://www.newdvdreleasedates.com/images/posters/large/captain-america-the-winter-soldier-2014-11.jpg", video: "https://www.youtube.com/embed/7SlILk2WMTI?si=Ou6qPYK895eLtpMn", synopsis: "unwavering dedication to his country and its ideals." },
  {title:"Titanic",genre:"romantic",language:"english",poster:"https://i.etsystatic.com/18242346/r/il/1ee046/4521043480/il_fullxfull.4521043480_5nbm.jpg",video:"https://www.youtube.com/embed/kVrqfYjkTdQ?si=kU0uBRHTGz1uns2E",synopsis:"titanic,unfortunately the ship hits an iceberg ,endangering their lives"},
  {title:"Avengers:End Game",genre:"action",language:"english",poster:"https://i.pinimg.com/originals/30/dc/6c/30dc6cd7a41fd5e25b5ce9415adec6eb.jpg",video:"https://youtube.com/embed/TcMBFSGVi1c?si=DurNuzyPQLn31U-6",synopsis:"thanons actions in infinity war,which erased half the universe"},
  {title:"The GodFather",genre:"crime",language:"english",poster:"https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@.V1.jpg",video:"https://youtube.com/embed/w3Wo6QiD3eU?si=F2-BHiSgp7Vebv5d",synopsis:"the destructive consequences of prioritizing family loyality over personal morality"},
  {title:"Fight Club",genre:"drama",language:"english",poster:"https://m.media-amazon.com/images/I/819TOAlb2AL.jpg",video:"https://youtube.com/embed/BdJKm16Co6M?si=GURvl3AHYu4Q18kX",synopsis:"decoupling your self-image from societal expectations and rediscovering your own strength and identity"},
  {title:"The Dark Knight",genre:"drama",language:"english",poster:"https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",video:"https://youtube.com/embed/NmNnCjTNYX8?si=eTB8Ly5tWSSrRVB3",synopsis:"true heroism requires self-effacement anda willingness to sacrifise personal gain for the greater good of society"},
  {title:"The Departed",genre:"crime",language:"english",poster:"https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",video:"https://youtube.com/embed/r-MiSNsCdQ4?si=YvMh4WpgE5XRaNuV",synopsis:"ambiguity of deception and loyalityt"},
  {title:"Citizen Kane",genre:"drama",language:"english",poster:"https://m.media-amazon.com/images/I/8123PDhL+OL.jpg",video:"https://youtube.com/embed/8dxh3lwdOFw?si=aH6UIpPDJFfFjp3U",synopsis:"the life of a wealthy newspaper magnate,charles foster kane"},
  {title:"Star Wars:Episode 4-A New Hope",genre:"drama",language:"english",poster:"https://images-cdn.ubuy.co.in/637de7b1fc828415473c2953-star-wars-episode-iv-a-new-hope.jpg",video:"https://youtube.com/embed/TzSm9dWso1o?si=VXyUB3_xZSDHNIdR",synopsis:"highlighting the struggles and triumps of the rebel alliance in their fight for freedom"},
  {title:"Hera Pheri",genre:"comedy",language:"hindi",poster:"https://image.tmdb.org/t/p/original/jSnwHZTkSufd5rFenTm2jUP03wV.jpg",video:"https://youtube.com/embed/8VO2ca_80Zc?si=NSe609NXUXQfsa7_​",synopsis:"they hatch a plan to claim the ransom for themselves "},
  {title:"Dilwale Dulhania Le Jayenga",genre:"drama",language:"hindi",poster:"https://bollywoodmovieposters.com/wp-content/uploads/2024/03/dilwale-dulhania-le-jayenge-poster-hd.jpg",video:"https://youtube.com/embed/cmax1C1p660?si=xwNIegeWk1wjIX_4",synopsis:"he follows her to india to win her and her father over"},
  {title:"gully boy",genre:"drama",language:"hindi",poster:"https://m.media-amazon.com/images/M/MV5BOWFkY2M3NDctZGEzMS00M2VmLTgzMTAtZWFiNjVmZDc5NWFjXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",video:"https://youtube.com/embed/JfbxcD6biOk?si=RpZKyHzxrLTeBu5v",synopsis:"his life changes drastically when he meets a rapper"},
  {title:"Kahaani",genre:"thriller",language:"hindi",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4Vm2m8s0S79GArNlaSuyhWg-yc1WZJ8hYw&s",video:"https://youtube.com/embed/rsjamVgPoI8?si=rd4WL8EOLWNE67a5",synopsis:"she realises that there is more then what meets the eye"},
  {title:"Dangal",genre:"drama",language:"hindi",poster:"https://m.media-amazon.com/images/I/712b+yDoWVL.AC_UF894,1000_QL80.jpg",video:"https://youtube.com/embed/x_7YlGv9u1g?si=ihS1OAgNpmmaDzrG",synopsis:"women are capable of excelling in any field they choose"},
  {title:"pathaan",genre:"thriller",language:"hindi",poster:"https://m.media-amazon.com/images/M/MV5BNDdkNTY1MDQtY2I5MC00OTFlLTg5OWQtZWE2YzE5NWFiMDgzXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",video:"https://youtube.com/embed/vqu4z34wENw?si=d5_yzr6WWY3Ncvr3​",synopsis:"always comeback and reclaim their nattive"},
  {title:"udaan",genre:"drama",language:"hindi",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmw_zg4Cs_JNkMstdnnJrmumG6tvnqMZNGg&s",video:"https://youtube.com/embed/wEJxe2bE-cE?si=m2DzLbWnwpOag-MV",synopsis:"challenging societal expectationsand letting go of relationships"},
  {title:"jawan",genre:"action",language:"hindi",poster:"https://ih1.redbubble.net/image.5250168074.0454/fposter,small,wall_texture,square_product,600x600.jpg",video:"https://youtube.com/embed/MWOlnZSnXJo?si=7qBNo1NwKHE1S2Gw",synopsis:"even ordinary people can make extraordinary changes by filtering aganist injustice and corruption"},
  {title:"pk",genre:"comedy",language:"hindi",poster:"https://www.tallengestore.com/cdn/shop/files/7381746122932A_large.jpg?v=1683479014",video:"https://youtube.com/embed/SOXWc32k4zA?si=znww4HGYdBOEIda7",synopsis:"to question everything and not blindly accept traditions or beliefs"},
  {title:"devdas",genre:"drama",language:"hindi",poster:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Devdas_%282002_Hindi_film%29.jpg/250px-Devdas_%282002_Hindi_film%29.jpg",video:"https://youtube.com/embed/8tuHQWGMQwY?si=J4AXV32lqmpNZ6U_",synopsis:"the corrosive effects of alcohol and selfpity"},
  {title:"sholay",genre:"action",language:"hindi",poster:"https://m.media-amazon.com/images/I/61NhAcNBC+L.AC_UF894,1000_QL80.jpg",video:"https://youtube.com/embed/fefaxq2nXoE?si=kvhGqMrFF7iB6xr2",synopsis:"importace of courage and standind strong in stressful times"},
  {title:"Sita Ramam",genre:"drama",language:"telugu",poster:"https://image.tmdb.org/t/p/original/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg",video:"https://youtube.com/embed/Ljk6tGZ1l3A?si=-jBZNMNpnYnHW32y",synopsis:"love and humanity should be prioritized over war ,boundaries ,and religious differces"},
  {title:"Chaava",genre:"drama",language:"telugu",poster:"https://image.tmdb.org/t/p/original/9F4lPRLjfBjsu0zjWNOZQMa8a4V.jpg",video:"https://youtube.com/embed/77vRyWNqZjM?si=zjg6Xviku54zvg32",synopsis:"tells the story of chatrapathi sambhaji maharaj,the son of chatrapathi shivaji ,who takes charge after his fathers death"},
  {title:"A aa",genre:"action",language:"telugu",poster:"https://teluguone.com/photos/uploadsExt/uploads/A%20Aa%20Movie%20Wallpapers/A%20Aa%20Movie%20Posters/A_Aa_Movie_Posters1_small.jpg",video:"https://youtube.com/embed/V4KdbX1xvaI?si=Us68lspCIZi7I1RL",synopsis:"revolves around the complexities  of relationships and the impotance of finding your own path"},
  {title:"RRR",genre:"action",language:"telugu",poster:"https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",video:"https://youtube.com/embed/i4pjiLGUTtk?si=FVymevSkrv479X3u",synopsis:"a fearless revolutionary and an officer in the british force who once shared a deep bond decide to join forces and chart out an inspirational"},
  {title:"Baahubali 1",genre:"history",language:"telugu",poster:"https://i.pinimg.com/474x/6a/a8/9d/6aa89d0a6607daf6c8764ab47261acf9.jpg",video:"https://youtube.com/embed/nOUS7K4cOo8?si=mDXg88fuoY5WPpJn",synopsis:"in thekingdom of mahishmati,while pursuing his love,shivudu learns about the conflict ridden pasts of his family and his legacy"},
  {title:"Lucky Bhaskar",genre:"thriller",language:"telugu",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwd0yQnKajRaYJBHU9Td_bQVAgK_p8RW-8Bg&s",video:"https://youtube.com/embed/Kv5RKsqVe-Y?si=ZwZs-rJmhkhvqZQ4",synopsis:"a cash strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky word of money laundering"},
  {title:"Jersey",genre:"action",language:"telugu",poster:"https://static.toiimg.com/photo/msid-65034960/65034960.jpg?38564",video:"https://youtube.com/embed/AjAe_Q1WZ_8?si=wdTQoi6lTBw8GCBX",synopsis:"driven by the desire to represent the indian cricket team fulfil his sons wish  for a jersey  as a gift"},
  {title:"Pushpa 2",genre:"drama",language:"telugu",poster:"https://mir-s3-cdn-cf.behance.net/project_modules/hd/c5100d168016237.64339f3f8be5b.jpg",video:"https://youtube.com/embed/g3JUbgOHgdw?si=yLBpSAoELxKvgZgZ",synopsis:"the clash on as pushpa and banwar singh continue their rivalry in this epic conclusion to the two parted action drama"},
  {title:"Kalki",genre:"action",language:"telugu",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzaiboHvvcU2TELqz2SwQwRJ78E0hzkpjMA&s",video:"https://youtube.com/embed/y1-w1kUGuz8?si=B4VEqdcWmKHGfVT-",synopsis:"a group of people set out to save a woman pregnant with lords vishnu's 10th and final avatar,kalki ,from an evil supreme god-king"},
  {title:"12th fail",genre:"drama",language:"telugu",poster:"https://image.tmdb.org/t/p/original/cDWW5l4NTWtQi9McwevrY3knsTd.jpg",video:"https://youtube.com/embed/DgI7us6v9sg?si=wD1CyX8kqjnfGDKR",synopsis:"tells the inspiring story of manoj kumar sharma ,a young man whho overcoms tremendous obstacles to achieve his dream of becoming an IAS officer"},
  {title:"Life is Beautiful",genre:"comedy",language:"telugu",poster:"https://upload.wikimedia.org/wikipedia/en/c/c0/Life_Is_Beautiful_Telugu.jpg",video:"https://youtube.com/embed/KIM-ISMX3_o?si=668GzwuV3P2uFIax",synopsis:"srinu,a college student ,moves to is uncle's house n hyderabad and meets various people in the neighbourhood,rich and poor alike "},
  {title:"Happy Days",genre:"drama",language:"telugu",poster:"https://m.media-amazon.com/images/M/MV5BMDUwZGIxMmQtYjA3My00OWRkLWEyNDItN2I1ZWM0MWZlODA5XkEyXkFqcGc@.V1.jpg",video:"https://youtube.com/embed/AIGmxBvLFlQ?si=ZQqcSHxOY3UWEHY-",synopsis:"a group of eight youngsters from an engineering college form an unbreakable friendship after going through various struggles "},
  {title:"Magadheera",genre:"action",language:"telugu",poster:"https://i.pinimg.com/736x/3a/0f/d9/3a0fd9feb7b65c30e3acd91122dcb17e.jpg",video:"https://youtube.com/embed/NXfhuqDNxg4?si=_oZ4RwGQp6061PAW",synopsis:"harsha and indhu hare a bond from a previous life ,when he realises this,he sets out to set things straight "},
  {title:"shatamanam Bhavati",genre:"comedy",language:"telugu",poster:"https://files.prokerala.com/movies/pics/800/2nd-wk-designs-65500.jpg",video:"https://youtube.com/embed/vum4rSjPGy4?si=iMuTogLNcNy-nV8O",synopsis:"the frustrated couple hatch a plan to make their children come home"},
];

const movieList = document.getElementById("movieList");
const searchBar = document.getElementById("searchBar");
const genreFilter = document.getElementById("genreFilter");
const languageFilter = document.getElementById("languageFilter");

function displayMovies(filteredMovies) {
  movieList.innerHTML = "";
  filteredMovies.forEach(movie => {
      let div = document.createElement("div");
      div.className = "movie-item";
      div.innerHTML = `
          <img src="${movie.poster}" onclick="redirectToMovie('${movie.title}')">
          <p>${movie.title}</p>
      `;
      movieList.appendChild(div);
  });
}

function redirectToMovie(title) {
  let selectedMovie = movies.find(movie => movie.title === title);
  if (selectedMovie) {
      localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
      window.location.href = "movie.html";
  }
}

searchBar.addEventListener("input", () => {
  let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchBar.value.toLowerCase()));
  if (filteredMovies.length > 0) {
      displayMovies(filteredMovies);
  } else {
      movieList.innerHTML = "<p>Movie not found</p>";
  }
});

genreFilter.addEventListener("change", () => {
  let filteredMovies = movies.filter(movie => genreFilter.value === "all" || movie.genre === genreFilter.value);
  displayMovies(filteredMovies);
});

languageFilter.addEventListener("change", () => {
  let filteredMovies = movies.filter(movie => languageFilter.value === "all" || movie.language === languageFilter.value);
  displayMovies(filteredMovies);
});

displayMovies(movies);