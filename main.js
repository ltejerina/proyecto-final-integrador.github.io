function perfiles() {
  fetch("https://randomuser.me/api/?results=1&inc=picture&gender=male")
      .then((jsonData) => jsonData.json())
      .then((data) => guardar_perfiles(data))
      .then((data) => {
          document.getElementById("foto").src =
              jason_perfiles.results[0].picture.large;
      });
}

function cargar() {
  fetch("https://dummyjson.com/users/filter?key=gender&value=male&limit=1")
      .then((jsonData) => jsonData.json())
      .then((data) => guardar_informacion(data))
      .then((data) => {
        console.log(jason);
        document.getElementById("empezar").hidden = true;
        document.getElementById("nombre").innerHTML = jason.users[0].firstName + " " + jason.users[0].maidenName;
        document.getElementById("universidad").innerHTML = jason.users[0].university;
        document.getElementById("fecha").innerHTML = jason.users[0].birthDate;
        document.getElementById("celular").innerHTML = jason.users[0].phone;
        document.getElementById("email").innerHTML = jason.users[0].email;
        document.getElementById("genero").innerHTML = jason.users[0].gender;
        document.getElementById("direccion").innerHTML = jason.users[0].address.address;
        document.getElementById("ocupacion").innerHTML = jason.users[0].company.title;
        document.getElementById("compania").innerHTML = jason.users[0].company.name;
        document.getElementById("lugar").innerHTML = jason.users[0].company.address.address;
        document.getElementById("area").innerHTML = jason.users[0].company.department;
        document.getElementById("body-text").hidden = false;
      });
  perfiles();
}

function guardar_informacion(data) {
  jason = data;
}

function guardar_perfiles(data) {
  jason_perfiles = data;
}
