const http = require('http');

http.createServer((request, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'})

    const person = {
        'name': 'Luis Salazar',
        'age': 35
    }

    res.write(JSON.stringify(person));
    res.end();

})
.listen(8080);

console.log("Escuchando en el puerto ", 8080);