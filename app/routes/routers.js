const express = require('express');

const { contactusInfo, getInfo } = require('../controllers/controller');

const router = express.Router();

router.post('/api/contactus', contactusInfo);
router.get('/api/get/contactus', getInfo);

module.exports = router;