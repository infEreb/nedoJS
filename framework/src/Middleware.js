const jsonParser = (req, res) => {
    res.writeHeader(200, {
        'Content-Type': 'application/json'
    });
}

const errorNotFound = (req, res) => {
    res.statusCode(404);
    res.statusMessage('Not Found');
} 

export { jsonParser, errorNotFound } 