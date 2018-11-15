import express from 'express';
let router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Hello World");
    res.status(200).send({"test": "test"});
});

export default router;
