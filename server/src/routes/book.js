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
        method: "PUT",
        path: "/book/:id",
        handler: bookControllers.updateBook,
    },
    {
        method: "DELETE",
        path: "/book/:id",
        handler: bookControllers.deleteBook,
    }
];

module.exports = routes;
