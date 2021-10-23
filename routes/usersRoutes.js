const UsersController = require('../controllers/usersController');

module.exports = (app, upload) => {

    // TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);
}
