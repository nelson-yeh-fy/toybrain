var MongoClient = require('mongodb').MongoClient

const TIMEEVENT_COLLECTION_NAME = 'timeEvents';
var state = {
    db: null,
}

exports.connect = function (url, done) {
    if (state.db) return done()

    MongoClient.connect(url, function (err, db) {
        if (err) return done(err)
        state.db = db
        done()
    })
}

exports.get = function () {
    return state.db
}

exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}

exports.findTimeEventById = function (req, res) {
    if (state.db) {
        state.db.collection(TIMEEVENT_COLLECTION_NAME).findOne({ 'idx': req.params.id }, function (err, result) {
            if (err)
                return console.log(err)
            res.json(result);
        });
    }
}

exports.findAllTimeEvent = function (req, res) {

    // res.json([{
    //     idx: 12345,
    //     isUserComment: true,
    //     text: 'Dispatch unit 100',
    //     addby: 'webApi',
    //     addon: '2017-06-13'
    // }, {
    //     idx: 12346,
    //     isUserComment: true,
    //     text: 'Dispatch unit 102',
    //     addby: 'webApi',
    //     addon: '2017-06-14'
    // }]);
    if (state.db) {
        state.db.collection(TIMEEVENT_COLLECTION_NAME).find().toArray((err, result) => {
            if (err)
                return console.log(err)
            res.json(result);
        })
    }
};

exports.addTimeEvent = function (req, res) {
    if (state.db) {
        var timeEvent = req.body;
        console.log('Adding timeEvent: ' + JSON.stringify(timeEvent));
        state.db.collection(TIMEEVENT_COLLECTION_NAME, function (err, collection) {
            collection.insert(timeEvent, { safe: true }, function (err, result) {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('Success: ' + JSON.stringify(result));
                    res.send(result[0]);
                }
            });
        });
    }
}

exports.updateTimeEvent = function (req, res) {
    if (state.db) {
        var id = req.params.id;
        var timeEvent = req.body;
        console.log('Updating id: ' + id);
        console.log(JSON.stringify(timeEvent));
        state.db.collection(TIMEEVENT_COLLECTION_NAME, function (err, collection) {
            collection.update({ 'idx': id }, timeEvent, { safe: true }, function (err, result) {
                if (err) {
                    console.log('Error updating: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(timeEvent);
                }
            });
        });
    }
}

exports.deleteTimeEvent = function (req, res) {
    if (state.db) {
        var id = req.params.id;
        console.log('Deleting id: ' + id);
        state.db.collection(TIMEEVENT_COLLECTION_NAME, function (err, collection) {
            collection.remove({ 'idx': id }, { safe: true }, function (err, result) {
                if (err) {
                    res.send({ 'error': 'An error has occurred - ' + err });
                } else {
                    console.log('' + result + ' document(s) deleted');
                    res.send(req.body);
                }
            });
        });
    }
}