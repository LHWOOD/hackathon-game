const router = require("express").Router();
const { User } = require("../../models");

//find all users //tested all good
router.get("/", (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create user //tested all good
router.post("/", (req, res) => {
  // console.log(req);
  User.create({
    username: req.body.username,
  })
    .then((userData) => {
      console.log(userData);
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
