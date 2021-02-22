const router = require('express').Router();
const fs = require("fs");

//Should read the db.json file and return all saved notes as JSON
router.get("/api/notes", (req, res) => {
    res.json(db.json)
});

//SHould recieve a new note to save on the request body, add to db.json file, then return new note to the client.
router.post("/api/notes", (req, res) => {
    req.create()
})

//Should receive query parameter containing id of note to delete (Means you'll have to give each note a unique id). In order to delete notes, you'll need to read all notes from db.json file, remove note with given id property, then rewrite notes to the db.json file
router.delete("/api/notes?:id", (req, res) => {
    req.findByIdAndDelete(id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;