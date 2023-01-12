let usuariosStorage = JSON.parse(localStorage.getItem("usuarios"));
let usuarios;
if (usuariosStorage){
    usuarios = usuariosStorage;
} else {
    usuarios = [];
}

function guardar(){
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");

    const usuario = {
        name : nombre.value,
        age : edad.value
    };

    usuarios.push(usuario);

    console.log("Se mostrará obj JSON: ",usuarios);

    localStorage.setItem("usuarios",JSON.stringify(usuarios));

}

let mostrarUsuarios = document.getElementById("mostrarUsuarios");
mostrarUsuarios.onmouseover = () => {
    listas.innerHTML = "<div></div>";
    usuarios.forEach(usuario => {
        let listas = document.getElementById("listas");
        let div = document.createElement("div");
        div.innerHTML = usuario.name + " " + usuario.age;
        listas.appendChild(div);
    })
};

