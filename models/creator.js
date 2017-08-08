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
        },
        last_login: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    })

    creator.associate = function(models) {
        creator.hasMany(models.album, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return creator
}