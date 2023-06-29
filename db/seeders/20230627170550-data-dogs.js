const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dogs = [];

    for (let i = 1; i <= 10; i++) {
      const dog = {
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        color: faker.color.human(),
        tail_length: faker.number.int({ min: 5, max: 15 }),
        weight: faker.number.int({ min: 10, max: 30 }),
      };

      dogs.push(dog);
    }

    await queryInterface.bulkInsert('dogs', dogs);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dogs', null, {});
  },
};
