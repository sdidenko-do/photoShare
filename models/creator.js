module.exports = function(sequelize, DataTypes) {
    var creator = sequelize.define("creator", {
        username: {
            type: DataTypes.STRING,
            notEmpty: true,
            validate: {
                len: [1, 15]
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100],
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        }
    })

    creator.associate = function(models) {
        creator.belongsToMany(models.album, {
            through: {
                model:"contributors",
                constraints: false,
                unique: false 
            },
            foreignKey: "creatorId",
            constraints: false 
        })
    }

    return creator
}