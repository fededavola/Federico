window.addEventListener("load", function(){
  var apiKey = "887f975aad1edef3410134273e134d4f"
arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita")).length >0


  if (arrayDePelisFavoritas.length>0) {
    for (var i = 0; i < arrayDePelisFavoritas.length; i++) {


    var url = "https://api.themoviedb.org/3/movie/" + arrayDePelisFavoritas[i] + "?api_key="+apiKey+"&language=en-US"
    var urlImg ="https://image.tmdb.org/t/p/original/"
    fetch(url)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(peliculas){
      console.log(pelicula);
      var ul =document.querySelector("section ul")
      var li;
      li ="<li>"
      li+="<h2>"+pelicula.title+"</h2>"
      li+="<a href=''></a>"
      li+="<img src='"+urlImg+ pelicula.poster_path +"'>"
      li+="</a>"
      li+="</li>"
      ul.innerHTML += li
    })
    .catch(function(error) {
      console.log("Error: " + error);
  })

}
}
})
