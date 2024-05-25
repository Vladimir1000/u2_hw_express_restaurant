const express = require('express');
const cors = require('cors');
const appetizersController = require('./controllers/appetizersController');
const dessertsController = require('./controllers/dessertsController');
const entreesController = require('./controllers/entreesController');


const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
});

app.get('/appetizers', appetizersController.getAppetizers);
app.get('/appetizer/:id', appetizersController.getAppetizer);
app.get('/appetizer/:id/price', appetizersController.getAppetizerPrice);

app.get('/desserts', dessertsController.getDesserts);
app.get('/dessert/:id', dessertsController.getDessert);
app.get('/dessert/:id/price', dessertsController.getDessertPrice);

app.get('/entrees', entreesController.getEntrees);
app.get('/entree/:id', entreesController.getEntree);
app.get('/entree/:id/price', entreesController.getEntreePrice);

