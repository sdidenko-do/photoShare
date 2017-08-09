var db = require("../models");

module.exports = function(app) {

	//GET route for all albums FROM current user
	var query = {};

	app.get("/api/album/",(req, res)=>{
		db.album.findAll({
			where:{
				creatorId: req.user.id 
			}
		}).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})

	//GET route for all photos for one album 
	app.get("/api/album/:id", (req, res)=>{
		db.album.findAll({
			where: {
				id: req.params.id
			}, 
			include: [{
				model: db.post
			}]
		}).then(dbPhoto=>{
			res.json(dbPhoto)
		})
	})

	//POST route to create a new album
	app.post("/api/album/", (req,res)=>{
		req.body.creatorId = req.user.id
		db.album.create(req.body).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})


	//PUT route to update a current album
	app.put("/api/album/:id", (req,res)=>{
		db.album.update(req.body, {
			where: {
				id: req.params.id
			}
		}).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})

	//DELETE route to delete a current album 
	app.delete("/api/album/:id", (req,res)=>{
		db.album.destroy({
			where:{
				id: req.params.id
			}
		}).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})

}