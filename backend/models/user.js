'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credential_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users",
    timestamps: false
  });
  return User;
};