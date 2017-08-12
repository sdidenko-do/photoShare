module.exports = function(sequelize, DataTypes) {
    var post = sequelize.define("post", {
        body: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        contributor: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    post.associate = function(models) {
        post.belongsTo(models.album)
    }

    return post
}