'use strict';

const { DataTypes } = require("sequelize");

{DataTypes}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'user_password',{
      type: DataTypes.STRING
    })
   
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('Users', 'user_password')
  }
};
