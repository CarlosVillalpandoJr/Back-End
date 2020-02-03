const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const router = require('express').Router();

// const { jwtSecret } = require('../config/secrets.js')

const Users = require('../users/users-model.js');



router.post('/register', async (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    try {
        if(user.password && user.city && user.name && user.email) {
            const AddUser = await Users.addUser(user)
            res.status(201).json({ message: `Thank you for registering, ${user.name}!` })
        } else {
            res.status(400).json({ errorMessage: 'Please fill out all required fields' })
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({ errorMessage: 'Error adding user to the database' })
    }
})

module.exports = router;