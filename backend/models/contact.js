'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    contact_id: DataTypes.SMALLINT,
    contact_firstName: DataTypes.STRING,
    contact_lastName: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.INTEGER,
    place_ide: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};