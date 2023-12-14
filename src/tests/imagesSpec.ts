it('GET to /api/images should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/images');
  expect(response.status).toBe(200);
});
