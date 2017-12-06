const Todo = require('../models/todo');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  Todo.find({})
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.status(422).send(err);
    });
});

router.post('/', (req, res) => {
  const body = req.body;
  Todo.create(body)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.status(422).send(err);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Todo.findById(id)
    .then(todo => {
      todo = Object.assign(todo, body);
      return todo.save();
    })
    .then(todo => {
      res.json(todo);
    })
    .catch(() => {
      res.status(422).send(err);
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Todo.remove({ _id: id })
    .then(todo => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(422).send(err);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Todo.findById(id)
    .then(todo => {
      res.json(todo);
    })
    .catch(() => {
      res.status(422).send(err);
    });
});

module.exports = router;
