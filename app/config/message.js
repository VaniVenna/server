module.exports = {
    successMessage: {
        saveReord: () => ({
            'status': 200,
            'message': 'Record Created Successfully..!'
        }),
        getAllRecord: () => ({
            'status': 200,
            'message': 'Success..!'
        }),
    },
    unExpectedError: {
        dbError: () => ({
            'status': 500,
            'message': 'Internal Server Error'
        })
    }
};