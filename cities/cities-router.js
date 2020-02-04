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

router.post('/', async (req, res) => {
    const city = req.body;
    try {
        if(city && city.name) {
            const AddedCity = await Cities.addCity(city)
            res.status(200).json(AddedCity)
        } else {
            res.status(400).json({ error: 'Please provide a name for the city' })
        }
    } catch(error) {
        res.status(500).json({ error: 'Could not add city to the database' })
    }
})

// Restaurants Endpoints


router.get('/all/rests', async (req, res) => {
    try {
        const AllRestaurants = await Cities.getRestaurants()
        res.status(200).json(AllRestaurants)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not retrieve restaurants from database' })
    }
})


router.get('/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
            const SingleRestaurant = await Cities.getRestaurantById(id)
            if(SingleRestaurant) {
                res.status(200).json(SingleRestaurant);
            } else {
                res.status(400).json({ error: 'Restaurant with the specified ID does not exist' })
            }
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Could not get restaurant with the specified ID from the database' })
    }
})

router.post('/restaurants', async (req, res) => {
    const restaurant = req.body;
    try {
        if(restaurant && restaurant.name) {
            const AddedRestaurant = await Cities.addRestaurant(restaurant)
            res.status(200).json(AddedRestaurant)
        } else {
            res.status(400).json({ error: 'Please provide a name for the restaurant' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Could not add restaurant to the database' })
    }
})

router.delete('/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const DeleteRestaurant = await Cities.deleteRestaurant(id)
        if(DeleteRestaurant) {
            res.status(200).json( {message: 'Deleted Restaurant Successfully', count: DeleteRestaurant} )
        } else {
            res.status(400).json({ error: 'Restaurant with specified ID does not exist' })
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Could not remove restaurant from the database' });
    }
})


module.exports = router;