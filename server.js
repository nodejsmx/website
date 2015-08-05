/**
 * Created by yorgen on 8/1/15.
 */
import http from 'http';
import express from 'express';

let app = express();
let server = http.createServer(app);

app.use('/publico', express.static(__dirname + '/publico'));
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/publico/index.html');
})
app.get('/deploy', (req, res) => {
    exec('git pull origin master');
})

server.listen(8080);
