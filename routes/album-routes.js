var db = require("../models");

module.exports = function(app) {

	//GET route for all albums
	var query = {};

	app.get("/api/album",(req, res)=>{

		if (req.query.albumId){
			query.AlbumId = req.query.id
		}

		db.album.findAll({
			where: query,
			include: [db.post]
		}).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})

	//GET route for all photos for one album 
	app.get("/api/album/:id", (req, res)=>{
		db.album.findOne({
			where: {
				id: req.body.id
			}, 
			include: [{
				model: db.post
			}]
		}).then(dbPhoto=>{
			res.json(dbPhoto)
		})
	})

	//POST route to find or create a new album
	app.post("/api/album", (req,res)=>{
		console.log(req.body)
		db.album.findOrCreate({
			where:{
				title: req.body.title
			} ,
			defaults: {
				creatorId: 1 
			}
		}).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})


	//PUT route to update a current album
	app.put("/api/album/:id", (req,res)=>{
		db.album.update(req.body, {
			where: {
				id: req.body.id
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