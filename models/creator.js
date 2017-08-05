module.exports = function(sequelize, DataTypes) {
	var creator = sequelize.define("creator", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	})

	creator.associate = function(models){
		creator.hasMany(models.album, {
			foreignKey: {
				allowNull: false
			}
		})
	}



return creator 
}