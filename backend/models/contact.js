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
    contact_id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    contact_firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_phone: {
        type: DataTypes.INTEGER,
    },
    place_id: {
        type: DataTypes.SMALLINT,
    allowNull: false
},
  }, {
    sequelize,
    modelName: 'Contact',
    tableName: "contacts",
    timestamps: false
  });
  return Contact;
};