var db = require("../models");

module.exports = function(app) {

	//GET route for all albums
	var query = {};

	app.get("/api/album",(req, res)=>{

		if (req.query.albumId){
			query.AlbumId = req.query.albumId
		}
		
		db.album.findAll({
			where: query,
			include: [db.album]
		}).then(dbAlbum=>{
			res.json(dbAlbum)
		})
	})



	//GET route for all photos for one album 
	app.get("/api/album/:albumId/", (req, res)=>{
		db.album.findOne({
			where: {
				albumId: req.body.albumId
			}, 
			include: [{
				model: db.post
			}]
		}).then(dbPhoto=>{
			res.json(dbPhoto)
		})
	})


}