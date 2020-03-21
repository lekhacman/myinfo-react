import Api from './api.client';

describe('Api Client', function() {
  let http = { get: jest.fn() };
  let api;

  beforeEach(function() {
    api = Api(http, { api: { url: 'http://localhost:8080' } });
  });

  it('should return myinfo data', async function() {
    const data = { name: { value: 'Andrew' } };
    http.get.mockResolvedValueOnce({ data });

    const actual = await api.myinfo('code123');

    expect(actual).toEqual(data);
  });
});
