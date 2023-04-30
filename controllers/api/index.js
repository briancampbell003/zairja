const router = require('express').Router();

const userRoutes = require('./user-routes');
const verseRoutes = require('./verse-routes');

router.use('/users', userRoutes);
router.use('/verses', verseRoutes);

module.exports = router;
