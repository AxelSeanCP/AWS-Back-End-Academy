const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            h.response("Homepage").code(200);
        }
    },
    {
        method: "POST",
        path: "/",
        handler: (request, h) => {
            const { username, password } = request.payload;

            return `User: ${username}, Pass: ${password}`;
        }
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut";
        }
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page";
        }
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut";
        }
    },
    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if(lang === "id") {
                return `Hai, ${name}`;
            }

            return `Hello ${name}!`;
        }
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        }
    }
];


module.exports = routes;