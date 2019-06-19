window.onload = function(){
  var apiKey = "887f975aad1edef3410134273e134d4f"
  var popularUrl = " https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&page=1"


  fetch(popularUrl)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);
      var titulo
      var poster
      var posterUrl
      var image
      var id
      for (var i = 0; i < informacion.results.length; i++) {
        // informacion[i]
        console.log(informacion.results[i]);
        id = informacion.results[i].id
        titulo = informacion.results[i].title
        poster = informacion.results[i].poster_path
        posterUrl= 'https://image.tmdb.org/t/p/original/'
        image = posterUrl + poster
        console.log(image);

        var listadoPopulares = document.querySelector(".listado-pelis-populares")
        listadoPopulares.innerHTML += "<li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="+ id +"'><p class='titulo-pelis-home'>"+ titulo +'</p><img src="'+ image +'" alt=""></a></li>'
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })

var puntuadasUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey + "&page=1"
fetch(puntuadasUrl)
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);
    var titulo
    var poster
    var posterUrl
    var image
    var id
    for (var i = 0; i < informacion.results.length; i++) {
       //informacion[i]
    console.log(informacion.results[i]);
    id = informacion.results[i].id
    titulo = informacion.results[i].title
    poster = informacion.results[i].poster_path
    posterUrl= 'https://image.tmdb.org/t/p/original/'
    image = posterUrl + poster
console.log(image);

 var listadoPuntuadas = document.querySelector(".listado-pelis-puntuadas")
   listadoPuntuadas.innerHTML += "<li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="+ id +"'><p class='titulo-pelis-home'>"+ titulo +'</p><img src="'+ image +'" alt=""></a></li>'
    }

  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

  var estrenosUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key="+ apiKey +"&page=1"
  fetch(estrenosUrl)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);
      var titulo
      var poster
      var posterUrl
      var image
      var id
      for (var i = 0; i < informacion.results.length; i++) {
         //informacion[i]
      console.log(informacion.results[i]);
      id = informacion.results[i].id
      titulo = informacion.results[i].title
      poster = informacion.results[i].poster_path
      posterUrl= 'https://image.tmdb.org/t/p/original/'
      image = posterUrl + poster
  console.log(image);

   var listadoEstrenos = document.querySelector(".listado-proximos-estrenos")
     listadoEstrenos.innerHTML += "<li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="+ id +"'><p class='titulo-pelis-home'>"+ titulo +'</p><img src="'+ image +'" alt=""></a></li>'
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
    
    }
