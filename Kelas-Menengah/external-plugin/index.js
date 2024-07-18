const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');
const path = require('path')

const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000,
    });

    await server.register(Vision);

    server.views({
        engines: {
            hbs: Handlebars
        },
        path: __dirname + '/views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // Rendering an HBS views with Handlebars
            return h.view('index', {
                title: 'Hapi.js with Handlebars',
                message: 'ini adalah template rendering engine menggunakan handlebars dan plugin vision'
            })
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();