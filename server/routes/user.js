const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);

router.post('/signup', controllers.user.post.signup);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.get('/dashboard',controllers.user.get);


module.exports = router;