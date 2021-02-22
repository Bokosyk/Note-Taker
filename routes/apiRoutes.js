const router = require('express').Router();
const notes = require("../db/db.json")
const fs = require("fs");

// let notes = [];

//Should read the db.json file and return all saved notes as JSON
router.get("/api/notes", (req, res) => {
    res.json(notes);
    // //Reads json file
    // notes = fs.readFileSync("../db/db.json", "utf8");
    // notes = JSON.parse(notes);
    // // res.json(db.json)
});

//SHould recieve a new note to save on the request body, add to db.json file, then return new note to the client.
router.post("/api/notes", (req, res) => {
    //Gives entry a unique id
    if (notes.length == 0) {
        req.body.id = "0";
    } else {
        req.body.id = JSON.stringify(JSON.parse(notes[notes.length - 1].id) + 1);
    }
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