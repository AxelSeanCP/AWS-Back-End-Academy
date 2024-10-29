const Hapi = require("@hapi/hapi");
const h2o2 = require("@hapi/h2o2");

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 5000,
  });

  server.route({
    method: "GET",
    path: "/{params*}",
    handler: (request, h) => {
      const { params } = request.params;
      const uri = `https://news.ycombinator.com/${params}`;

      return h.proxy({
        uri,
        passThrough: true,
      });
    },
  });

  server.route({
    method: "GET",
    path: "/{url?}",
    handler: (request, h) => {
      const uri = `https://${request.query.url}`;
      return h.proxy({
        uri,
        passThrough: true,
      });
    },
  });

  await server.register(h2o2);
  await server.start();
  console.log(`Server running on %s`, server.info.uri);
};

init();
