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
  User.create({
    username: req.body.username,
  })
    .then((userData) => {
      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.username = userData.username;
      //   req.session.loggIn = true;
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
