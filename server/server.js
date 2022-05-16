const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//connect to MongoDB local
mongoose.connect("mongodb://localhost:27017/keeperAppDB", {useNewUrlParser: true});


//create Note Schema
const notesSchema = {
    title: String,
    content: String
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

app.post("/", function(req, res){
    const newNote = new Note ({
        title: req.body.title,
        content: req.body.content
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



app.listen(4000, function() {
    console.log("Server started on port 4000");
  });