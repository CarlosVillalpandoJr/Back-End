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

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if(id) {
            const SingleCity = await Cities.getCityById(id)
            res.status(200).json(SingleCity);
        } else {
            res.status(400).json({ error: 'City with the specified ID does not exist' })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Could not get city with the specified ID from the database' })
    }
})




module.exports = router;