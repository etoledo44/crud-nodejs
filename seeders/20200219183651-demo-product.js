'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    // let data = []
    // let amount = 5

    // while (amount--) {
    //   data.push({
    //     name: 'apple',
    //     description: 'A delicious apple',
    //     price: 1.56,
    //     qnt: 10
    //   })
    // } operator to generate data for the database
    
    return queryInterface.bulkInsert('Products', data, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
