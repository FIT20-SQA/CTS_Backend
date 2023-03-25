const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

const {TokenAuth} = require('../middlewares/TokenAuth');
const {RoleAuth} = require('../middlewares/RoleAuth');
const {AdminAuth} = require('../middlewares/RoleAuth');




router.get('/test_login',TokenAuth,RoleAuth,UserController.test);
router.get('/admin_login',TokenAuth,AdminAuth,UserController.test_admin);

router.get('/logout',UserController.logout);

router.post('/register',UserController.register);
router.post('/login',UserController.login);




module.exports = router;