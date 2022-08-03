'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      contact_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SMALLINT
      },
      contact_firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_phone: {
        type: Sequelize.INTEGER
      },
      place_id: {
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
    await queryInterface.dropTable('Contacts');
  }
};