const express = require('express');

const { contactusInfo } = require('../controllers/controller');

const router = express.Router();

router.post('/api/contactus', contactusInfo);

module.exports = router;