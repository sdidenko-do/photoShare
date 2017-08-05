var db = require("../models");

module.exports = function(app){
	//GET route for one photo
	app.get("/api/album/:albumId/post/:photoId", (req, res)=>{
		db.post.findOne({
			where: {
				photoId: req.body.photoId
			}, 
			include: [db.album]
		}).then(dbPhoto=>{
			res.json(dbPhoto)
		})
	})


	//POST route for adding photos to album
	app.post("/api/album/aid:/post:pid", (req, res)=>{
		db.post.create(req.body).then(addPhoto=>{
			res.json(addPhoto)
		})
	})
}