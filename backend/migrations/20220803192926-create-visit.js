'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('visits', {
      visit_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      
      user_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      place_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      contact_id: {
        type: Sequelize.SMALLINT,
        allowNull:false
      },
      visit_comment: {
        type: Sequelize.TEXT,
        allowNull:false
      }
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('visits');
  }
};