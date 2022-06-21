const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const e = require("express");
var cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//connect to MongoDB local
mongoose.connect("mongodb://localhost:27017/keeperAppDB", {useNewUrlParser: true});


//create Note Schema
const notesSchema = {
    title: String,
    content: String,
    date: String
  };
  
  //create model
const Note = new mongoose.model("Note", notesSchema);

app.get("/", (req, res) => {

    Note.find({}, function(err, foundResults) {
        if (!err) {
            if (foundResults){
                res.send(foundResults);
                //console.log(foundResults);
            }
        } else {
            res.send(err);
        }
    })
})

app.get("/notes/:id", (req, res) => {

    Note.find({ _id: req.params.id }, function(err, foundResult) {
        if (!err) {
            if (foundResult){
                res.send(foundResult);
            }
        } else {
            res.send(err);
        }
    })
})

app.post("/", function(req, res){
    const newNote = new Note ({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date
    })

    newNote.save(function(err){
        if (!err) {
            res.send("Note added")
        } else {
            res.send(err);
        }
    });
})

app.delete("/delete/:id", function(req, res){

    Note.deleteOne({ _id: req.params.id }, function (err) {
        if (!err) {
            res.send('Successfully deleted item');
        } else {
            res.send(err)
        }
      });
})

app.patch("/update/:id", function(req, res){

    Note.updateOne(
        { _id: req.params.id },
        { $set: req.body },
        function(err){
            if (!err) {
                res.send('Successfully updated item');
            } else {
                res.send(err);
            }
        }
      );
})



app.listen(4000, function() {
    console.log("Server started on port 4000");
  });