const citiesModel = require('./cities-model');
const server = require('../api/server.js');
const request = require('supertest');
const db = require('../data/db-config');

describe('cities-router', () => {

    describe('GET request to cities', () => {

        it('should return name of city with ID 1', async () => {
            // const city = await citiesModel.getCityById(1)
            const response = await request(server).get('/api/cities/1')
            // console.log('city', city);
            expect(response.body.name).toMatch('Chicago')   
        })

        it('should return name of the city with the ID 2', async () => {
            const response = await request(server).get('/api/cities/2')
            expect(response.body.name).toMatch('New York')
        })
    })

    describe('GET requests to restaurants', () => {

        it('should return name of the restaurant with ID 1', async () => {
            const response = await request(server).get('/api/cities/restaurants/1')
            expect(response.body.name).toEqual('Chicago Dog House')
            expect(response.body.city).toEqual('Chicago')
            expect(response.body.address).toBe('816 W Fullerton Ave')
        })

        it('should return name of the restaurant with ID 2', async () => {
            const response = await request(server).get('/api/cities/restaurants/2')
            expect(response.body.name).toEqual('Advent Garden')
            expect(response.body.city).toEqual('New York')
            expect(response.body.address).toBe('130 E 7th St')
        })
    })

    describe('POST requests', () => {

        it('should POST a new city successfully', async () => {
            const response = await request(server).post('/api/cities/')
            .send({ name: 'Beverly Hills' })
            .expect(200)  
        })

        it('should POST a new restaurant successfully', () => {
            request(server).post('/api/restaurants/')
            .send(
                { 
                    name: 'test',    
                    address: 'test address',
                    city: 'test city',
                    zip: 'test zip',
                    phone: 'test phone',
                    website: 'test website',
                    rating: 5,
                    notes: 'test notes',
                    stamped: 1,
                    city_id: 1
                } 
            )
            .expect(200)
        })
    })
})