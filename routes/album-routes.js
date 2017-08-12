var db = require("../models");

module.exports = function(app) {

    //GET route for all albums FROM current user // move to auth controller for now 
    var query = {};

    app.get("/api/album/", (req, res) => {
        db.contributors.findAll({
            where: {
                contributorId: req.user.id
            },
            include: {
                model: db.album
            }
        }).then(allAlbums => {
            console.log(allAlbums)
            res.json(allAlbums)
                //need second query to get all albums for each album that this user has access to 
        })
    })

    //GET route for all photos for one album 
    app.get("/album/:id", (req, res) => {
        // console.log(req.params.id)
        db.album.findOne({
            where: {
                id: req.params.id
            },
            include: [db.post]
        }).then(dbPhoto => {
            console.log("DB PHOTO IS ====>" + JSON.stringify(dbPhoto))
            hbs = {
                userId: req.user.id,
                email: req.user.email,
                username: req.user.username,
                albumId: dbPhoto.id,
                posts: dbPhoto.posts
            }
            res.render('album', hbs)
        })
    })

    //POST route to create a new album // move to auth controller for now 
    app.post("/album", (req, res) => {
        db.album.create({
            title: req.body.title,
            albumImg: req.body.albumImg,
            creatorName: req.user.username,
            creatorId: req.user.id
        }).then(dbAlbum => {
            db.contributors.create({
                albumId: dbAlbum.id,
                contributorId: req.user.id
            }).then(response => {
                console.log(JSON.stringify(dbAlbum))
                console.log("response" + JSON.stringify(response));
                hbs = {
                    userId: req.user.id,
                    email: req.user.email,
                    username: req.user.username,
                    albumId: dbAlbum.id
                }
                res.render('album', hbs)

            })
        })
    })


    function loadImages(hbs, res) {
        //GET route for all photos for one album 
        db.album.findOne({
            where: {
                id: hbs.albumId
            },
            include: [db.post]
        }).then(dbPhoto => {
            console.log("DB PHOTO IS ====>" + JSON.stringify(dbPhoto))

            var obj = dbPhoto
            obj.userId = hbs.userId
            obj.username = hbs.username
            obj.albumId = hbs.albumId;

            res.render('album', obj)
        })
    }


    //POST route to add contributors to an album
    app.post("/api/album/user/", (req, res) => {
        db.contributors.create({
            albumId: req.body.id,
            contributorId: req.user.id
        }).then(response => {
            res.json(response)
        })
    })

    //PUT route to update a current album
    app.put("/api/album/", (req, res) => {
        db.album.update(req.body, {
            where: {
                id: req.body.albumId
            }
        }).then(dbAlbum => {
            res.json(dbAlbum)
        })
    })

    //DELETE route to delete a current album 
    app.delete("/api/album/:id", (req, res) => {
        db.album.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbAlbum => {
            res.json(dbAlbum)
        })
    })

}