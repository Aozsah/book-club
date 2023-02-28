const bookControllers = require("../controllers/book");

const routes = [
    {
        method: "GET",
        path: "/books",
        handler: bookControllers.getAllBooks,
    },
    {
        method: "POST",
        path: "/bookadd",
        handler: bookControllers.createBook,
    },
    {
        method: "GET",
        path: "/book/:id",
        handler: bookControllers.getBookById,
    },
    
    {
        method: "DELETE",
        path: "/book/:id",
        handler: bookControllers.deleteBook,
    }
];

module.exports = routes;
