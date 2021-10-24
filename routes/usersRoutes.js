const UsersController = require('./controllers/usersController');

modules.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
}
