const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Text');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("xd?" + Date.now()) });
}

module.exports = keepAlive;