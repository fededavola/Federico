window.onload = function(){
  var apiKey = "887f975aad1edef3410134273e134d4f"
  var listadoDeGenerosUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=887f975aad1edef3410134273e134d4f&language=en-US"

  fetch(listadoDeGenerosUrl)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(info) {
      console.log(info);
      var arrayGeneros = info.genres
      console.log(arrayGeneros);

      for (var i = 0; i < arrayGeneros.length; i++) {
        var id= arrayGeneros[i].id
        var generos= arrayGeneros[i].name

        document.querySelector(".listado-generos").innerHTML += "<li> <a href='Proyecto-final-genero-de-lista-pag3.html?idDeGenero=" + id + "&genero="+generos+"'>" + generos + "</a></li>"
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })
}
