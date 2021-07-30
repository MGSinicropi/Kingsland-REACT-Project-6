const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.blog.get);

router.post('/', auth(), controllers.blog.post);

router.put('/:id', auth(), controllers.blog.put);

router.delete('/:id', auth(), controllers.blog.delete);

module.exports = router;