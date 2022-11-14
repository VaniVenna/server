const { saveContactInfo, getAllInfo } = require("../../service/contactUsService");
const message = require('../config/message');

// Save Contact Us Info
const contactusInfo = async (req, res) => {
    let output = message.successMessage.saveReord();
    try {
        const result = await saveContactInfo(req.body);
        output.data = result;
        res.send(output);
    } catch (error) {
        console.log('---Error---', error);
        res.send(message.unExpectedError.dbError());
    }
};

// Get All Contact Us Details
const getInfo = async (req, res) => {
    let output = message.successMessage.getAllRecord();
    try {
        const result = await getAllInfo();
        output.data = result;
        res.send(output)
    } catch (error) {
        res.send(message.unExpectedError.dbError());
        console.log('----Get Contact Info Error---',error)
    }
}

module.exports = {
    contactusInfo,
    getInfo,
}