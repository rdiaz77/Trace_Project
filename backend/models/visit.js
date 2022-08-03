'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visit.init({
    visit_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    place_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    contact_id: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    visit_comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Visit',
    tableName: 'visits',
    timestamps: false
  });
  return Visit;
};