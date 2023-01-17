const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    version: "1.0",
    message:
      "Welcome to my RESTful API project. You can send a GET request to the endpoint /person/ to see the object pattern and use all the functionalities of this API. Try it yourself and have fun!",
    endpoints: [
      {
        path: "/person",
        methods: ["GET", "POST", "PATCH", "DELETE"],
      },
      {
        path: "/",
        methods: "GET",
      },
    ],
  });
});

module.exports = router;
