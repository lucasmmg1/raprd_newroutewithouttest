import json from "../data.json" with { type: "json" };

export default {
  path: '/users',
  method: 'GET',
  action: (_, res) => {
    res.json({ "code": 200, "response": json });
  },
  test: async (req) => {
    const res = await req.get('/users');
    if (res.status !== 200) {
      throw new Error(`Expected status 200, got ${res.status}`);
    }
    if (!Array.isArray(res.body)) {
      throw new Error('Expected response body to be an array');
    }
  }
};
