module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dogs', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tail_length: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dogs');
  },
};
