const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create new user
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title) {
    res.status(400).send({
      message: "Invalid Request"
    });
    return;
  }

  const user = {
      firstname : req.body.firstname,
      lastname  : req.body.lastname,
      email : req.body.email,
      isauthor : req.body.isauthor ? req.body.isauthor : false
  };

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });

};