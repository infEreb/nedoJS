module.exports = jsonParser = (req, res) => {
    res.writeHeader(200, {
        'Content-Type': 'application/json'
    });
}

module.exports = errorNotFound = (req, res) => {
    res.statusCode(404);
    res.statusMessage('Not Found');
} 