window.onload = function(){
  console.log(1);
  var apiKey = "887f975aad1edef3410134273e134d4f"
  var listadoDeGenerosUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key="+ apiKey +""

  fetch(listadoDeGenerosUrl)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(info) {
      console.log(info);
      var generos = info.genres

      for (var i = 0; i < generos.length; i++) {
        document.querySelector(".listado-generos").innerHTML += '<li><a href="#">' + generos[i].name + '</a></li>'
      }
    })
}
