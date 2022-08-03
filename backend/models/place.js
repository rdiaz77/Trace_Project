'use strict';
const {
  Model
} = require('sequelize');
const { all } = require('../controllers/place-controller');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Place.init({
    place_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    place_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    place_street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    place_city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    place_county: {
        type: DataTypes.STRING,
        allowNull: false
    },
    place_region: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.SMALLINT,
        allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Place',
    tableName: 'Places',
    timestamps: false
  });
  return Place;
};