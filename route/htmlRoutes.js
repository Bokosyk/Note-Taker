const express = require('express').Router();
const path = require('path');

//Returns the notes.html file using GET
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"))
  });

//Returns the notes.html file using GET
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"))
  });


