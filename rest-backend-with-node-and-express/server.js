const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



// create an Express application
const app = express();

/*  
var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

app.use(cors(corsOptions))
*/  
app.use(cors());

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*
  NEW optimized version of ROUTING CODE
*/

// Default route setting
app.get('/', (req, res) => {
    res.json({"message": "Building REST-API endpoint with Node.js & Expresss in Angular"});
});

// Activate all possible routes for all REST endpoints and their CRUD operations 
const productAPIEndPoint = require('./routes/product.routes');
app.use('/api', productAPIEndPoint);

// Find 404 and hand over to error handler
app.get('*', function(req, res){
    res.send('This is NOT a valid HTTP URL for API RESTful communication!', 404);
  });

// bootstrap the application, start the server
app.listen(8000, () => {
    console.log('Server started!')
});


/*
  OLD and ORIGINAL CODE

  // Retrieve all Products
app.route('/api/prodotti').get((req, res) => {
    res.send(
         [{ nome: 'MacBook' }
         ,{ nome: 'ZenBook' }
         ,{ nome: 'VivoBook' }
         ,{ nome: 'HP Pavillon' }
        ]
    ), console.log('All products retrieved!')
});

// Retrieve a single Product with product name
app.route('/api/prodotti/:nome').get((req, res) => {
    const requestedNomeProdotto = req.params['nome']
    res.send({ nome: requestedNomeProdotto })
});

// Create a new Product
app.route('/api/prodotti').post((req, res) => {
    res.send(201, req.body)
});

// Update a Note with product name
app.route('/api/prodotti/:nome').put((req, res) => {
    res.send(200, req.body)
});

app.route('/api/prodotti/:nome').delete((req, res) => {
    res.sendStatus(204)
  })
  
*/

module.exports = app;