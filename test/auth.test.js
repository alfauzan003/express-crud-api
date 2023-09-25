const request = require('supertest');
const app = require('../app');

describe('Authentication Testing', () => {
    let token;
    it('Should get JWT token', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({
            email: 'test@gmail.com',
            password: 'test123',
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        token = response.body.token;
    });
    
    it('Should access protected route with JWT token', async () => {
        const response = await request(app)
        .get('/orders')
        .set('Authorization', `Bearer ${token}`);
        
        expect(response.status).toBe(200);
    });
});
