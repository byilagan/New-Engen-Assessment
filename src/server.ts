import express from 'express';
import path from 'path';
import ColorController from './controllers/ColorController';


const app: express.Application = express();
const port = process.env.PORT || 5000;
const colorController = new ColorController(); 

// If DB is empty, fill it with colors
colorController.fillDB();

app.use(express.static(path.join(__dirname, '../client/build')));

// GET ALL COLORS
app.get('/api', colorController.getAllColors);

// GET A COLOR BY ID
app.get('/api/:id', colorController.getColor); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'../client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`); 
});