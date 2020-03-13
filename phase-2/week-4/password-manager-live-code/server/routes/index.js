const router = require('express').Router();

const passwordRoutes = require('./passwordRoutes');
const userRoutes = require('./userRoutes');

router.use('/api/passwords', passwordRoutes);
router.use('/api/users', userRoutes);

module.exports = router;
