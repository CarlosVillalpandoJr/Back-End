const citiesModel = require('./cities-model');
const server = require('../api/server.js');
const request = require('supertest');
const db = require('../data/db-config');

describe('Cities Model', () => {

    describe('City model object with the ID of 1', () => {

        it('should return the city id object of 1', async () => {
            // const city = await citiesModel.getCityById(1)
            const response = await request(server).get('/api/cities/1')
            // console.log('city', city);
            console.log(response.body.name);
            expect(response.body.name).toMatch('Chicago')   
        })
    })
})