'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {
      password: {
        type: DataTypes.STRING,
      }
    },
  )
  console.log(User === sequelize.models.User);
  return User;
}