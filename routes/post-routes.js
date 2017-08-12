var db = require("../models");

module.exports = function(app) {
    //GET route for cover photo
    app.get("/api/album/post/cover", (req, res) => {
        db.album.findOne({
            where: {
                id: req.body.albumId
            },
            include: [{
                model: db.post,
                where: {
                    id: 1
                }
            }]
        }).then(dbPhoto => {
            res.json(dbPhoto)
        })
    })

    //POST route for adding photos to album
    app.post("/api/album/post/", (req, res) => {
        db.post.create(req.body).then(addPhoto => {

            console.log('------------------------------------');
            console.log(req);
            console.log('------------------------------------');
            res.render("album", addPhoto)
        })
    })

    //GET route for getting all photos from one album is in album-routes with the route "/api/album/photos"
}