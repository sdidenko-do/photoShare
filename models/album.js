module.exports = function(sequelize, DataTypes) {
    var album = sequelize.define("album", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }, {
        getterMethods:{
            allInfo() {
                let info = {
                    title: this.title,
                    creatorId: this.id,                    
                }
                return info
            }
        }
    })

    album.associate = function(models) {
        album.hasMany(models.post, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    album.associate = function(models) {
        album.hasMany(models.contributors)
    }

    album.associate = function(models) {
        album.belongsToMany(models.creator, {
            through: {
            	model:"contributors",
            	constraints: false
            }, 
            foreignKey: "albumId",
            constraints: false
        })
    }

    return album
}