const http = require('http');
const express = require('express');
const app = express();
const port = 3000;



// http와 express 함께 사용.
const server = http.createServer(app);
server.listen(port, () =>  {
    console.log(`Run on Server: http://localhost:${port}`);
});