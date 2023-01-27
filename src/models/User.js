module.exports = (sequelize, DataTypes) => {
  console.log(`1`, 1);
  const User =  sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
  })
  User.associate = function (models) {
  }
  return User
}