const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');

router.post('/login', AdminController.admin_login); // open

module.exports = router;