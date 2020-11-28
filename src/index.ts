import express from 'express';

console.log('hello world!');

const app = express();
const port = 9000;
app.get('/', (request, result) => {
    return result.send('Hello World');
});

app.listen(port);