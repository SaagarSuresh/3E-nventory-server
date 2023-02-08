// import seed data files, arrays of objects
const storeData = require('../seed_data/store');
const truffleData = require('../seed_data/truffle');
const inventoryData = require('../seed_data/inventory');

exports.seed = function (knex) {
  return knex('store')
    .del()
    .then(() => {
      return knex('store').insert(storeData);
    })
    .then(() => {
      return knex('truffle').del();
    })
    .then(() => {
      return knex('truffle').insert(truffleData);
    })
    .then(() => {
      return knex('inventory').del();
    })
    .then(() => {
      return knex('inventory').insert(inventoryData);
    });
};
