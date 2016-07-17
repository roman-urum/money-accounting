/**
 * Created by Roman on 6/24/16.
 */
import * as http from 'http';

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Contet-Type': 'text/plain'});
    response.end('Hello Mary!!');
});

const port = 8000;

server.listen(port);
console.log('Listening on http://localhost: ' + port);