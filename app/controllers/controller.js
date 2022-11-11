const contactusInfo = async (req, res) => {
    try {
        res.send(req.body);
    } catch (error) {
        console.log('---Error---', error);
        return error;
    }
}

module.exports = {
    contactusInfo,
}