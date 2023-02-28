const bookClubControllers = require("../controllers/bookClub");

const routes = [
    {
        method: "GET",
        path: "/bookclubs",
        handler: bookClubControllers.getAllBookClubs,
    },
    {
        method: "POST",
        path: "/bookclubadd",
        handler: bookClubControllers.createBookClub,
    },
    {
        method: "GET",
        path: "/bookclub/:id",
        handler: bookClubControllers.getBookClubById,
    },
    {
        method: "PUT",
        path: "/bookclub/:id",
        handler: bookClubControllers.updateBookClub,
    },
    {
        method: "DELETE",
        path: "/bookclub/:id",
        handler: bookClubControllers.deleteBookClub,
    }
];

module.exports = routes;
