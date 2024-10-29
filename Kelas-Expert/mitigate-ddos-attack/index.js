const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    host: "localhost",
    port: 3000,
  });

  server.ext("onRequest", (request, h) => {
    const clientIp = request.info.remoteAddress;

    // Check both IPv4 (127.0.0.1) and IPv6 (::1) localhost addresses
    if (clientIp === "127.0.0.1" || clientIp === "::1") {
      return h.response("You can't make this request").code(403).takeover();
    }

    return h.continue;
  });

  server.route({
    method: "GET",
    path: "/home",
    handler: (request, h) => {
      const clientIp = request.info.remoteAddress;

      // Same check here to ensure consistent blocking on /home route
      if (clientIp === "127.0.0.1" || clientIp === "::1") {
        return h.response("You can't make this request").code(403);
      }

      return h.response("Selamat Datang di Home").code(200);
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
