const router = require('express').Router();

const {
    getThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts
} = require('../controllers/thoughts-controllers');

router.route('/')
    .get(getThoughts)
    .post(createThoughts);

router.route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

module.exports = router; 