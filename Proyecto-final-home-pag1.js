window.onload = function(){
  var apiKey = "887f975aad1edef3410134273e134d4f"
  var popularUrl = " https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&page=1"


  fetch(popularUrl)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);
      for (var i = 0; i < informacion.results.length; i++) {
        // informacion[i]
        console.log(informacion.results[i]);

  var titulo = informacion.results[i].title
  var poster = informacion.results[i].poster_path
  var posterUrl= 'https://image.tmdb.org/t/p/original/'
  var image = posterUrl + poster
  console.log(image);

  var listadoPopulares = document.querySelector(".listado-pelis-populares")
    listadoPopulares.innerHTML += '<li><p>'+ titulo +'</p><img src="'+ image +'" alt=""></li>'
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
    for (var i = 0; i < informacion.results.length; i++) {
       //informacion[i]
    console.log(informacion.results[i]);

var titulo = informacion.results[i].title
var poster = informacion.results[i].poster_path
var posterUrl= 'https://image.tmdb.org/t/p/original/'
var image = posterUrl + poster
console.log(image);

 var listadoPuntuadas = document.querySelector(".listado-pelis-puntuadas")
   listadoPuntuadas.innerHTML += '<li><p>'+ titulo +'</p><img src="'+ image +'" alt=""></li>'
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
      for (var i = 0; i < informacion.results.length; i++) {
         //informacion[i]
      console.log(informacion.results[i]);

  var titulo = informacion.results[i].title
  var poster = informacion.results[i].poster_path
  var posterUrl= 'https://image.tmdb.org/t/p/original/'
  var image = posterUrl + poster
  console.log(image);

   var listadoEstrenos = document.querySelector(".listado-proximos-estrenos")
     listadoEstrenos.innerHTML += '<li><p>'+ titulo +'</p><img src="'+ image +'" alt=""></li>'
      }

    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
    function nav_box(){
      document.getElementById('menu-header-menu').classList.nav_box('active');
    }
    function go(){
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){
            document.form.submit();
        }
        else{
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
        }
}
}
