var db = require("../models");

module.exports = function(app){
    app.post("/api/eventpage", function(req, res){
        console.log(req.body)

        db.event.create(req.body)
            .then(function(result){
                res.redirect("/events")
            })
    })
}