//Dependables
const router = require('express').Router();
const path = require('path');

//Returns the notes.html file using GET
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//Returns the index.html file using GET
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

 
module.exports = router;


