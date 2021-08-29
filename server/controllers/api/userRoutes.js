const router = require("express").Router();
const { User } = require("../../models");

//find all users //tested all good
router.get("/", (req, res) => {
  User.findAll()
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one user //test all good
// router.get("/:id", (req, res) => {
//   User.findOne({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((userData) => {
//       if (!userData) {
//         res.status(404).json({
//           message: "No user found",
//         });
//         return;
//       }
//       res.json(userData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

//get one user by name //test all good
router.get("/:username", (req, res) => {
  User.findOne({
    where: {
      username: req.params.username,
    },
  })
    .then((userData) => {
      if (!userData) {
        res.status(404).json({
          message: "No user found",
        });
        return;
      }
      res.json(userData);
    })
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

//update score //test all good for individual score
router.put("/:username", (req, res) => {
  console.log(req);
  User.update(
    {
      score: req.body.score,
    },
    {
      where: {
        username: req.params.username,
      },
    }
  )
    .then((score) => {
      res.json(score);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login //tested all good
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((userData) => {
    if (!userData) {
      res.status(400).json({
        message: "No user with that username",
      });
      return;
    }
    res.json({
      user: userData,
      message: "You are now logged in",
    });
  });
});

//logout //no go
router.post("/logout", (req, res) => {
  req.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;
