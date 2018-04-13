// app.get("/scrape", function(req, res) {
//     // First, we grab the body of the html with request
//     axios.get("http://www.nytimes.com/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);
    
//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h2").each(function(i, element) {
//         // Save an empty result object
//         var result = {};
        
//         // Add the text and href of every link, and save them as properties of the result object
//         result.title = $(this)
//         .children("a")
//         .text();
//         result.link = $(this)
//         .children("a")
//         .attr("href");
        
//         // Create a new Article using the `result` object built from scraping
//         db.Article.create(result)
//         .then(function(dbArticle) {
//             // View the added result in the console
//             console.log(dbArticle);
//         })
//         .catch(function(err) {
//             // If an error occurred, send it to the client
//             return res.json(err);
//         });
//     });
    
//     // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send("Scrape Complete");
// });
// });

// // Route for getting all Articles from the db
// app.get("/articles", function(req, res) {
//     // TODO: Finish the route so it grabs all of the articles
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {
//     // TODO
//     // ====
//     // Finish the route so it finds one article using the req.params.id,
//     // and run the populate method with "note",
//     // then responds with the article with the note included
// });

// // Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//     // TODO
//     // ====
//     // save the new note that gets posted to the Notes collection
//     // then find an article from the req.params.id
//     // and update it's "note" property with the _id of the new note
// });
