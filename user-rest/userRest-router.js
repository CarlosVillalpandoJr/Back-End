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

// POST a users specific restaurant
router.post('/:userId/:restId', async (req, res) => {
    const user = req.params.userId;
    const rest = req.params.restId;

    try {
        const addedUserRest = await UserRest.addUserRest(user, rest)
        res.status(200).json(addedUserRest)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Could not add user restaurant to database'})
    }
})

// DELETE a users specific restaurant
router.delete('/:userId/:restId', async (req, res) => {
    const user = req.params.userId;
    const rest = req.params.restId;

    try {
        const deletedUserRest = await UserRest.deleteUserRest(user, rest)
        res.status(200).json({ message: 'Successfully deleted', count: deletedUserRest })
    } catch(error){
        console.log(error)
        res.status(500).json({ error: 'Could not delete user restaurant from database' })
    }
})


module.exports = router;