import supertest from 'supertest';
import app from '../index';

const request = supertest(app.app);
describe('Test endpoint responses', () => {
	// it('gets the api endpoint', async () => {
	// 	const response = await request.get('/api');
	// 	expect(response.status).toBe(200);
	// 	// done();
	// });
	it('gets the api/students endpoint', async () => {
		const response = await request.get('/api/imageprocess');
		expect(response.status).toBe(200);
		// done();
	});
	it('gets the api/students/imageResize endpoint', async () => {
		const response = await request.get('/api/imageprocess/imageResize');
		expect(response.status).toBe(200);
		// done();
	});
});

describe('Test endpoint image process responses', () => {
	it('test 1', async () => {
		const response = await request.get(
			'/api/imageprocess/imageResize?name=pic&width=1050&height=0'
		);
		console.log(response.status);
		expect(response.status).toBe(200);
		// done();
	});
	it('test 2', async () => {
		const response = await request.get(
			'/api/imageprocess/imageResize?name=pic&width=500&height=400'
		);

		expect(response.statusCode).toBe(200);
		// done();
	});
	it('test 3', async () => {
		const response = await request.get(
			'/api/imageprocess/imageResize?name=pic1&width=200&height=405'
		);
		expect(response.status).toBe(200);
		// done();
	});
	it('test 5', async () => {
		const response = await request.get(
			'/api/imageprocess/imageResize?name=pic&width=10&height=200'
		);
		expect(response.status).toBe(200);
		// done();
	});
	it('test 6', async () => {
		const response = await request.get(
			'/api/imageprocess/imageResize?name=&width=10&height=200'
		);
		expect(response.status).toBe(200);
		// done();
	});
	it('test 7', async () => {
		const response = await request.get(
			'/api/imageprocess/imageResize?name=&width=&height='
		);
		expect(response.status).toBe(200);
		// done();
	});
});
