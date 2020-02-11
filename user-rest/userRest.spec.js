const UserRests = require('./userRest-model.js');
const db = require('../data/db-config');

describe('userRest-model', function() {

    describe('test enviornment', function() {
        it('should use the testing enviornment', function() {
            expect(process.env.DB_ENV).toBe('testing')
        })
    })

    describe('getUserRest', function() {
        it('should get the user restaurants with ID 1', async function() {
            const restaurant = await UserRests.getUserRest(1)
            expect(restaurant[0].name).toBe('Chicago Dog House')
            expect(restaurant[0].city).toBe('Chicago')
        })

        it('should get the user restaurants with ID 2', async function() {
            const restaurant = await UserRests.getUserRest(2)
            console.log('ID 2 rest', restaurant[0]) 
            expect(restaurant[0].name).toBe('Advent Garden')
            expect(restaurant[0].city).toBe('New York') 
        })
    })
})    