const express = require('express');

const UserRest = require('./userRest-model.js');

const router = express.Router();

// get back user restaurants
router.get('/:id', (req, res) => {
    const { id } = req.params;
    UserRest.getUserRest(id)
        .then(clicked => {
            res.status(200).json(clicked)
        })
        .catch(error => {
            console.log('get user rest', error)
            res.status(500).json(error)
        });
});



module.exports = router;