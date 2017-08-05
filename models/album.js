module.exports = function(sequelize, DataTypes) {
	var album = sequelize.define("album", {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		} 
	})

	album.associate = function(models) {
		album.hasMany(models.post, {
			foreignKey: {
				allowNull: false
			}
		})
		album.belongsTo(models.creator, {
			foreignKey: {
				allowNull: false
			}
		})
	}
}