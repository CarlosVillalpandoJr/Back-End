const express = require('express');

const Cities = require('./cities-model.js');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const AllCities = await Cities.getCities()
        res.status(200).json(AllCities)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not retrieve cities from the database' })
    }
})




module.exports = router;