module.exports = function(sequelize, DataTypes) {
    var album = sequelize.define("album", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        creatorName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        albumImg: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "http://lorempixel.com/400/400/"
        }
    })

    album.associate = function(models) {
        album.belongsTo(models.creator)
        album.belongsToMany(models.creator, {
            through: {
                model: "contributors",
                constraints: false
            },
            foreignKey: "albumId",
            constraints: false
        })

        album.hasMany(models.post, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return album
}