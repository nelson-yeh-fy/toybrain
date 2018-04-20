var MongoClient = require('mongodb').MongoClient

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

exports.findById = function (req, res, mongodb_collection_name) {
    if (state.db) {
        state.db.collection(mongodb_collection_name).findOne({ 'id': req.params.id }, function (err, result) {
            if (err)
                return console.log(err)
            res.json(result);
        });
    }
}

exports.findAll = function (req, res, mongodb_collection_name) {

    if (state.db) {
        state.db.collection(mongodb_collection_name).find().toArray((err, result) => {
            if (err)
                return console.log(err)
            console.log(result);
            res.json(result);
        })
    }
};

exports.addItem = function (req, res, mongodb_collection_name) {
    if (state.db) {
        var item = req.body;
        console.log('Adding Item: ' + JSON.stringify(item));
        state.db.collection(mongodb_collection_name, function (err, collection) {
            collection.insert(item, { safe: true }, function (err, result) {
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

exports.updateItem = function (req, res, mongodb_collection_name) {
    if (state.db) {
        var id = req.params.id;
        var item = req.body;
        console.log('Updating id: ' + id);
        console.log(JSON.stringify(item));
        state.db.collection(mongodb_collection_name, function (err, collection) {
            collection.update({ 'id': id }, item, { safe: true }, function (err, result) {
                if (err) {
                    console.log('Error updating: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(item);
                }
            });
        });
    }
}

exports.deleteItem = function (req, res, mongodb_collection_name) {
    if (state.db) {
        var id = req.params.id;
        console.log('Deleting id: ' + id);
        state.db.collection(mongodb_collection_name, function (err, collection) {
            collection.remove({ 'id': id }, { safe: true }, function (err, result) {
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
