'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('characters', {
      character_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      race: {
        type: Sequelize.STRING,
        allowNull: false
      },
      class: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('characters');
  }
};