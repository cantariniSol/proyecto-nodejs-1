//CALLBACKS
// Ejercicio 1
// add = (a,b)=> {return a + b};

// calculate = (a,b, operation) => {return operation(a,b)}

// const res = calculate(2,8, add);
// console.log("El resultado es: ", res);

//Ejercicio 2
// const booksDB = [
//     {
//         id: 1,
//         title:"Clean Code"
//     },
//     {
//         id: 2,
//         title:"The progmantic programmer"
//     },
//     {
//         id:3,
//         title:"Web developmen"
//     }
// ];

// const getBookById = (id, callback)=>{
//     const book = booksDB.find((book) => book.id === id)
//     if(!book){
//         const err = new Error();
//         err.message = "Book not found"
//         callback(err);
//     }
//     callback(null, book);
// }

// getBookById(20, (err, book)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     return console.log(book)
// });

//---------------------------------------------------------------
//Ejercicio 2
function procesarTexto(texto, callback){
    console.log('Procesando texto: ', texto);
    callback(texto.toUpperCase()); //Llamamos al calback y le pasamos el resultado
};

function imprimirResultado(resultado){
    console.log("Resultado: ", resultado);
};

procesarTexto('Hola Mundo', imprimirResultado);