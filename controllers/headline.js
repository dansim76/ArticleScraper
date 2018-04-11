var express = require("express");

var router = express.Router();

var article = require("../models/Articles.js");




// Route for getting all Articles from the db
router.get("/articles", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
    .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
    })
    .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
    });
});


router.get("/saved", function(req,res){
    Article.find({issaved:true}, null, {sort:{created:-1}},function(Err,data){
        if(data.length === 0){
            res.render("placeholder",{message:"You have not saved this articles"})
        }
        else{
            res.render("saved",{saved:data})
        }
        
    })
})

module.exports = router;