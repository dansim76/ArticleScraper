var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
    headline : {
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    img:{
        type: String,
        default: "/public/images/unavailable.jpg"
    },
    issaved: {
        type:Boolean,
        default: false
    },
    status: {
        type: String,
        default: "save article"
    },
    created: {
        type: Date,
        default: Date.now
    },
    note:{
        type: Schema.Types.ObjectId,
        ref:"Note"
    }
    
    
});
var Article = mongoose.model("Article", ArticlesSchema);

module.exports = Article;