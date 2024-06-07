
// Retrieve all products from ....
exports.findAll = (req, res) => {
    res.send(
         [{ nome: 'MacBook' }
         ,{ nome: 'ZenBook' }
         ,{ nome: 'VivoBook' }
         ,{ nome: 'HP Pavillon' }
        ]
    )
};

// Retrieve a Product by "nome"  from ....
exports.findByName = (req, res) => {
    const requestedNomeProdotto = req.params['nome']
    res.send({ nome: requestedNomeProdotto })
};

// Create a new Product
exports.create = (req, res) => {
    res.send(201, req.body)
};

// Upadate a Product by productID
exports.update = (req, res) => {
    res.send(201, req.body)
};

// Delete a Product by productID
exports.delete = (req, res) => {
    res.send(201, req.body)
};
