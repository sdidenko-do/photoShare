var db = require("../models");

module.exports = function(app) {
    //ADD user to existing album BY checking if EMAIL exists 
    app.post("/api/contributor/:id", (req, res) => {
        db.creator.findOne({
            where: {
                email: req.body.email
            }
        }).then(response => {
            if (response === null || undefined) {
                console.log("user does not exist")
                res.json("User does not exist")
                res.redirect("album")
            } else {
                db.contributors.create({
                    albumId: req.params.id,
                    contributorId: response.id
                }).then(addedContributor => {
                    // res.json(addedContributor)
                })
            }
        })
    })
};