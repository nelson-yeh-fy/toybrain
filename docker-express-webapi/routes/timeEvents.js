var express = require('express');
var router = express.Router();
var dbHelper = require('../dbHelper_mongoDB');

// middleware to use for all requests
router.use(function (req, res, next) {
    console.log('New request: ', req.body);
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
    // get all timeEvents (accessed at GET http://localhost:3001/api/timeEvents)
    .get(function (req, res, next) {

        dbHelper.findAllTimeEvent(req, res);
    })

    // create a timeEvent (accessed at POST http://localhost:3001/api/timeEvents)
    .post(function (req, res) {

        dbHelper.addTimeEvent(req, res);
    })
    ;

router.route('/:id')
    // get the timeEvent with this id (accessed at GET http://localhost:3001/api/timeEvents/:id)
    .get(function (req, res) {
        dbHelper.findTimeEventById(req, res);
    })

    // update the timeEvent with this id (accessed at PUT http://localhost:3001/api/timeEvents/:idx)
    .put(function (req, res) {
        dbHelper.updateTimeEvent(req, res);
    })

    // delete thetimeEvent with this id (accessed at DELETE http://localhost:3001/api/timeEvents/:idx)
    .delete(function (req, res) {
        dbHelper.deleteTimeEvent(req, res);
    })
    ;

module.exports = router;
