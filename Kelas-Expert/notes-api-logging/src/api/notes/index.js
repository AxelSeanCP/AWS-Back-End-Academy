const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server) => {
    const notesHandler = new NotesHandler();
    server.route(routes(notesHandler));
  },
};