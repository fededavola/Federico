window.addEventListener("load",function(){
var apiKey = "887f975aad1edef3410134273e134d4f"
var urlSearchParams = new URLSearchParams(window.location.search)
var textoBuscado = urlSearchParams.get("buscador")
console.log(textoBuscado);

var url = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+textoBuscado+"&page=1&include_adult=false"
fetch(url)
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion){
    console.log(informacion);
    var arrayBuscador = informacion.results
    for (var i = 0; i < informacion.results.length; i++) {
      // informacion[i]
      console.log(informacion.results[i]);
      id = informacion.results[i].id
      titulo = informacion.results[i].title
      poster = informacion.results[i].poster_path
      posterUrl= 'https://image.tmdb.org/t/p/original/'
      image = posterUrl + poster
      console.log(image);

      var listadoBuscador = document.querySelector(".listado-pelis-buscador")
      listadoBuscador.innerHTML += "<li><a href='Proyecto-final-detalle-peli-pag5.html?idDePelicula="+ id +"'><p class='titulo-pelis-home'>"+ titulo +'</p><img src="'+ image +'" alt=""></a></li>'
    }



  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
})
