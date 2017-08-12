module.exports = function(sequelize, DataTypes) {
    var contributors = sequelize.define("contributors", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        albumId: {
            type: DataTypes.INTEGER,
            references: null
        },
        contributorId: {
            type: DataTypes.INTEGER,
            references: null
        }

    })

    contributors.associate = function(models) {
        contributors.belongsTo(models.album)
    }

    return contributors
}