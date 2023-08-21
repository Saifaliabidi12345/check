

let express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/', function (req, res) {
    controller.postCat(req, res);
});

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

module.exports = router;