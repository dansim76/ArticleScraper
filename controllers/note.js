var express = require("express");

var router = express.Router();

var note = require("../models/Note.js");
var article = require("../models/Articles.js")
router.get("/note/:id", function(req,res){
    var id = req.params.id;
    console.log(id);
    article.findById(id).populate("note").exec(function(err,data){
        res.send(data.note);
    })

})



module.exports = router;