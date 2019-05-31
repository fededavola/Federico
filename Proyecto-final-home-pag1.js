window.onload = function(){
  var apiKey = "887f975aad1edef3410134273e134d4f"
  var url = " https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&page=1"

  fetch(url)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);


    })
    .catch(function(error) {
      console.log("Error: " + error);
    })


}
