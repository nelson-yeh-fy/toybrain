var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    res.json([{
        idx: 12345,
        showComments: true,
        text: 'Dispatch unit 100',
        addby: 'webApi',
        addon: '2017-06-13'
    }, {
        idx: 12346,
        showComments: true,
        text: 'Dispatch unit 102',
        addby: 'webApi',
        addon: '2017-06-14'
    }]);
});

module.exports = router;
