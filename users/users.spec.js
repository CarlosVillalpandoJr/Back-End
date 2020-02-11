const Users = require('./users-model');
const db = require('../data/db-config.js');

describe('The Users Model', () => {
    // not truncating users database
    beforeEach(async () => {
        await db('users').del()
    })

    describe('adding user function', () => {
        it('should add a new user', async () => {
            const userData = { username: 'test', password: 'password', name: 'tester', city: 'test city', email: 'test@gmail.com' }
            await Users.addUser(userData)

            const user = await db('users')
            console.log('user body', user[0])
            expect(user.length).toBe(1)
            expect(user[0].name).toBe('tester')
            expect(user[0].username).toBe('test')
            expect(user[0].city).toBe('test city') 
            expect(user[0].email).toBe('test@gmail.com')
        })
    })
})