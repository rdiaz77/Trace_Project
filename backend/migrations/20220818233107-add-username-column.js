'use strict';

const {DataTypes} = require('sequelize')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Credentials', 'user_username', {
      type: DataTypes.STRING
    })
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
