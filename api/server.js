const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const AuthRouter = require('../auth/auth-router');
const UserRouter = require('../users/users-router');
const CitiesRouter = require('../cities/cities-router');

server.use(helmet());
server.use(express.json());
server.use(cors());



server.use('/api/auth', AuthRouter);
server.use('/api/users', UserRouter);
server.use('/api/cities', CitiesRouter);

server.get('/', (req, res) => {
    res.send("API Running")
});

module.exports = server;