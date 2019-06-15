window.onload = function(){
var apiKey = "887f975aad1edef3410134273e134d4f"

var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('idDePelicula');

var url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=" + apiKey+ "&language=en-US"

fetch(url)
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion){
    console.log(informacion);

    console.log(informacion);
    var titulo
    var poster
    var posterUrl
    var image
    var id
    var genres
    var language
    var sinopsis
    var trailer
    var releaseDate
      // informacion[i]
      // console.log(informacion.results[i]);
      id = informacion.id
      titulo = informacion.title
      poster = informacion.poster_path
      posterUrl= 'https://image.tmdb.org/t/p/original/'
      image = posterUrl + poster
      genres = informacion.genres
      language = informacion.original_language
      sinopsis = informacion.overview
      releaseDate = informacion.release_date
      trailer = informacion.video
      if (trailer==false) {
        trailer
      }

      // console.log(image);
      var parrafoGeneros = ""
      for (var i = 0; i < genres.length; i++) {
        // genres[i].id
        parrafoGeneros += "<a href='Proyecto-final-genero-de-lista-pag3.html?idGenero="+genres[i].id+"'>" + genres[i].name + "</a> "
        }
        console.log(parrafoGeneros);
      var detallesDePelicula = document.querySelector("#lista-pelicula-detalles")
      detallesDePelicula.innerHTML += "<li><div class='titulo-de-pelicula detalle-en-texto'>Titulo de la Pelicula: "+titulo+"</div><div class='genero-de-peli detalle-en-texto'><h3>"+parrafoGeneros+"</h3></div><div class='lenguaje-original detalle-en-texto'>Lenguaje de la pelicula: "+ language +"</div><div class='sinopsis detalle-en-texto'><p>Sinopsis: "+ sinopsis +"</p></div><div class='fecha-de-estreno detalle-en-texto'>Fecha de estreno: "+ releaseDate +"</div><div class='poster-de-peli '><img src='"+ image +"' alt=''></div><div class='trailer-de-peli'><video src='"+ trailer +"' autoplay poster=''></video></div></li>"
      // <!-- <div class="titulo-de-pelicula detalle-en-texto">
      //   Titulo de Pelicula:
      // </div>
      // <div class="genero-de-peli detalle-en-texto">
      //   <a href="#">Genero:</a>
      // </div>
      // <div class="lenguaje-original detalle-en-texto">
      //   Lenguaje original:
      // </div>
      // <div class="sinopsis detalle-en-texto">
      //   Sinopsis:
      // </div>
      // <div class="fecha-de-estreno detalle-en-texto">
      //   Fecha de estreno:
      // </div>
      // <div class="poster-de-peli ">
      //   <img src="" alt="">
      // </div>
      // <div class="trailer-de-peli">
      //   <video src="videofile.ogg" autoplay poster="posterimage.jpg">
      //
      //   </video>
      // </div> -->


  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
}
