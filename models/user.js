module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        }
    })
    user.associate = function(models){
        user.hasMany(models.event)
    }
    return user;
}