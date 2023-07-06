exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBACSRFTOKEN') {
        return res.send('BAD CSS')
    }
}