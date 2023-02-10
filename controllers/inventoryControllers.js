const inventory = require("../seed_data/inventory");
const truffle = require("../seed_data/truffle");

const knex = require("knex")(require("../knexfile"));

const getInventoryList = (req, res) => {
    knex
        .select("inventory.*", "store.name as store_name", "truffle.name as truffle_name")
        .from("inventory")
        .join("store", "store.id", "inventory.store_id")
        .join("truffle", "truffle.id", "inventory_id")
        .then((inventory) =>{
            res.json(inventory);
        })
        .catch((error) =>{
            console.log(error);
            res.status(404).send("Error retrieving inventory list");
        });
};

module.exports = {getInventoryList}