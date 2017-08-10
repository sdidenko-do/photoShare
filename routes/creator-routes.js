var db = require("../models");

module.exports = function(app) {
	//ADD user to existing album BY checking if EMAIL exists 
	app.post("/api/contributor/", (req, res)=>{
		db.creators.findOne({
			where:{
				email: req.body.email
			}
		}).then(response=>{
			if (response === null || undefined) {
				console.log("user does not exist")
				res.json("User does not exist")
				res.redirect("album")
			} else {
				db.contributors.create({
					albumId: req.body.albumId,
					contributorId: response.id
				}).then(addedContributor=>{
					res.json(addedContributor)
				})
			}
		})
	})
};