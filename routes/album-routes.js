var db = require("../models");

module.exports = function(app) {

	//GET route for all albums
	var query = {};
	if (req.query.album_id){
		query.AlbumId = req.query.album_id
	}
	app.get("/api/album",(req, res)=>{
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