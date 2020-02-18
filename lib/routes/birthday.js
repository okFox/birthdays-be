const { Router } = require('express');
const Birthday = require('../models/birthdays');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
//add a birthday
  .post('/', ensureAuth, (req, res, next) => {
    Birthday
      .create(req.body)
      .then(birthday => res.send(birthday))
      .catch(next);
  })

  // get all birthdays
  .get('/', (req, res, next) => {
    Birthday
      .find()
      .then(birthday => res.send(birthday))
      .catch(next);
  })

//get one birthday
  .get(':id', (req, res, next) => {
    Birthday
      .findById(req.params.id)
      .then(birthday => res.send(birthday))
      .catch(next);
  })

//update a birthday
  .patch('/:id', ensureAuth, (req, res, next) => {
    Birthday
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(birthday => res.send(birthday))
      .catch(next);
  })

//delete birthday (you are no longer friends with that jerk)
  .delete('/:id', ensureAuth, (req, res, next) => {
    Birthday
      .findByIdAndRemove(req.params.id)
      .then(birthday => res.send(birthday))
      .catch(next);
  });







