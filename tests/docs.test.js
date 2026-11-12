const { app, request } = require('./helpers');

describe('Documentación de la API', () => {
  test('test_especificacion_openapi_disponible', async () => {
    const res = await request(app).get('/api-docs.json');

    expect(res.status).toBe(200);
    expect(res.body.openapi).toBe('3.0.3');
    expect(Object.keys(res.body.paths)).toEqual(expect.arrayContaining([
      '/health',
      '/api/v1/auth/login',
      '/api/v1/auth/perfil',
      '/api/v1/sorteos',
      '/api/v1/sorteos/{id}',
      '/api/v1/sorteos/{id}/resultado',
      '/api/v1/tickets/chance',
      '/api/v1/tickets/baloto',
      '/api/v1/tickets',
      '/api/v1/tickets/{codigo}',
      '/api/v1/tickets/{codigo}/anular',
      '/api/v1/tickets/{codigo}/pagar',
      '/api/v1/caja/resumen',
      '/api/v1/caja/cierre',
    ]));
  });

  test('test_swagger_ui_disponible', async () => {
    const res = await request(app).get('/api-docs/');

    expect(res.status).toBe(200);
    expect(res.text).toContain('Swagger UI');
  });
});
