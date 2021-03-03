const router = require('express').Router();
const notes = require("../db/db.json")
const fs = require("fs");
const newNotes = [];



    function writeDB(data) {
        // Converts new JSON Array back to string
        data = JSON.stringify(data);
        // Writes String back to db.json
        fs.writeFileSync("./db/db.json", data, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    }



    //Should read the db.json file and return all saved notes as JSON
    //This route is not firing
    router.get("/api/notes", (req, res) => {
        console.log("Getting notes.")
        
        fs.readFile("./db/db.json", "utf8", (err, notes) => {
            console.log(notes);
            res.json(JSON.parse(notes));
        });

    });

    //SHould recieve a new note to save on the request body, add to db.json file, then return new note to the client.
    router.post("/api/notes", (req, res) => {
        console.log(req.body);
        // Gives entry a unique id
        if (notes.length == 0) {
            req.body.id = "0";
        } else {
            req.body.id = Math.floor(Math.random()*1000) + 1;
        }

        //Pushes, writes, returns
        newNotes.push(req.body);
        writeDB(newNotes);
        fs.readFile("./db/db.json", "utf8", (err, notes) => {
            res.json(notes);
        });
    })

    //Should receive query parameter containing id of note to delete (Means you'll have to give each note a unique id). In order to delete notes, you'll need to read all notes from db.json file, remove note with given id property, then rewrite notes to the db.json file
    router.delete("/api/notes/:id", (req, res) => {

        //converts to string after obtaining id
       let id = req.params.id.toString();

       // searches for matching ID in array
       for (i=0; i < notes.length; i++){
           if (notes[i].id == id){
               res.send(notes[i]);

               notes.splice(i,1);
               break;
           }
       }
    });

    // writeDB(notes);

    module.exports = router;
