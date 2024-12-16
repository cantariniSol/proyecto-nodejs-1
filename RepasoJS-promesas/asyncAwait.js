//Async y Await

const booksDB = [
    {
        id: 1,
        title:"Clean Code",
        author: 3
    },
    {
        id: 2,
        title:"The progmantic programmer",
        author: 1
    },
    {
        id:3,
        title:"Web developmen",
        author: 3
    }
];

const authorDB = [
    {
        id:1,
        name: "Alex Cross"
    },
    {
        id: 2,
        name: "Ilian Poet"
    },
    {
        id:3,
        name: "Leonardo Prieto"
    }
];

async function getBookById(id) {
    try{
        //Busca libro por ID
        const book = booksDB.find(book => book.id === id);

        //Verifica si el libro existe
        if(!book){
            throw new Error(`Book with ID ${id} not found`);
        }

        //Busca el autor del libro
        const author = authorDB.find(author => author.id === book.author);
        if(!author){
            throw new Error(`Author with ID ${book.author} not found`);
        }

        //Retorna los datos del libro justo con los datos del auto
        return{
            id: book.id,
            title: book.title,
            author: author.name
        }
    }catch(error){
        console.error(`Error fetching book: ${error.message}`);
        throw error;
    }
}
(async () =>{
    try{
        const book = await getBookById(1);
        console.log(book)
    }catch(error){
        console.error(error.message);
    }
})();