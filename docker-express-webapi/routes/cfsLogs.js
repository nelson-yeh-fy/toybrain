var express = require('express');
var router = express.Router();
var dbHelper = require('../dbHelpers/mongoLab');

const MONGODB_COLLECTION_CFSLOGS = 'cfsLogs';

// middleware to use for all requests
router.use(function (req, res, next) {
    console.log('New request: ', req.body);
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
    // get all items (accessed at GET http://localhost:3001/api/<route>)
    .get(function (req, res, next) {

        dbHelper.findAll(req, res, MONGODB_COLLECTION_CFSLOGS);
    })

    // create an item (accessed at POST http://localhost:3001/api/<route>)
    .post(function (req, res) {

        dbHelper.addItem(req, res, MONGODB_COLLECTION_CFSLOGS);
    })
    ;

router.route('/:id')
    // get item with this id (accessed at GET http://localhost:3001/api/<route>/:id)
    .get(function (req, res) {
        dbHelper.findById(req, res, MONGODB_COLLECTION_CFSLOGS);
    })

    // update item with this id (accessed at PUT http://localhost:3001/api/<route>/:idx)
    .put(function (req, res) {
        dbHelper.updateItem(req, res, MONGODB_COLLECTION_CFSLOGS);
    })

    // delete item with this id (accessed at DELETE http://localhost:3001/api/<route>/:id)
    .delete(function (req, res) {
        dbHelper.deleteItem(req, res, MONGODB_COLLECTION_CFSLOGS);
    })
    ;

module.exports = router;
