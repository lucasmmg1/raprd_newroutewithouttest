import json from "../data.json" with { type: "json" };

export default {
  path: '/users/:id',
  method: 'GET',
  action: (req, res) => {
    let r = { "code": 404, "response": "Not Found" }
    for (let entry of json) {
      if (entry.id !== +req.params.id) continue;
      r = { "code": 200, "response": entry }
    }
    res.json(r);
  }
};
