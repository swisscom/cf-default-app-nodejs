'use strict';

const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    envVariables: process.env,
    headers: req.headers,
    params: req.query
  });
});

module.exports = router;
