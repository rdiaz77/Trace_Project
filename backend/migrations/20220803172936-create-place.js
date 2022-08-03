'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Places', {
      place_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      place_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      place_street: {
        type: Sequelize.STRING,
        allowNull:false
      },
      place_city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      place_county: {
        type: Sequelize.STRING,
        allowNull: false
      },
      place_region: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Places');
  }
};