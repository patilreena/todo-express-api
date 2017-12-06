const express = require('express');
const router = express.Router(); //Initialize router

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
