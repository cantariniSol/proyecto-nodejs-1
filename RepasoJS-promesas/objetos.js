// OBJETOS
// 1. Creación de objetos.
var user = {
    name: "Sol",
    lastname: "Cantarini",
    email: "sol.cantarini@yopmail.com",
    userName:"sol-cantarini",
    password:"12345"
}
console.log(typeof(user));
console.log("Objeto 1: " + user.name + " " + user.lastname);


//2. Creación de objetos.
class User{
    constructor(nombre,lastname, email,userName,password){
        this.nombre = nombre;
        this.lastname = lastname;
        this.email = email;
        this.userName = userName;
        this.password = password
    }

    getUserName() {
        return this.userName;
    }
}

const user1 = new User("Juan", "Pérez", "juan.perez@example.com", "juanp", "12345");
console.log("Objeto 1: ", user1.getUserName());
console.log(typeof(user1) + "Desde una clase");

