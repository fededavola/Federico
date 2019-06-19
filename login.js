window.addEventListener("load",function() {

// TENGO QUE CHECKEAR SI ALGUIEN INICIO SESSION, CON QUE UN DATO ESTE< ME BASTA PARA SABERLO
if (window.sessionStorage.getItem("nombre") != "" && window.sessionStorage.getItem("nombre") != null) {
  // alert("Bienvenido: "+   window.sessionStorage.getItem("nombre"))
  // CAPTURO EL TEXTO DE LOGIN Y LO REEMPLAZO POR EL NOMBRE DEL USUARIO
  document.querySelector('a.boton-login ').innerHTML = window.sessionStorage.getItem("nombre")
  var arrayDePelisFavoritas = []
  console.log(arrayDePelisFavoritas);
}



  document.querySelector("form.login").addEventListener("submit",function(event){
      // event.preventDefault()
      var name = document.querySelector("input[name='name']").value
      console.log(name);
      window.sessionStorage.setItem("nombre",name)
      window.sessionStorage.getItem("nombre")
      var email = document.querySelector("input[name='email']").value
      console.log(email);
      window.sessionStorage.setItem("email",email)
      window.sessionStorage.getItem("email")
      var gender = document.querySelector("select[name='gender']").value
      console.log(gender);
      window.sessionStorage.setItem("gender",gender)
      window.sessionStorage.getItem("gender")

  })

})
