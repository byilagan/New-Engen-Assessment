import express from 'express';
import path from 'path';

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
  });
  

app.listen(port, () => {
    console.log(`Server listening on port ${port}`); 
});