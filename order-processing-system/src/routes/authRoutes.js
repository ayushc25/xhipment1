const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// ✅ Debugging route to check if this file is loaded
router.get('/', (req, res) => {
    res.send('Auth API is working!');
});

router.post('/register', register);  // ✅ User registration
router.post('/login', login);        // ✅ User login

module.exports = router;
