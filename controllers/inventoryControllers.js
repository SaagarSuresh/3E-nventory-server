const inventory = require("../seed_data/inventory");
const truffle = require("../seed_data/truffle");

const knex = require("knex")(require("../knexfile"));

const getInventoryList = (req, res) => {
    knex
        .select("inventory.*", "store.name as store_name", "truffle.name as truffle_name")
        .from("inventory")
        .join("store", "store.id", "inventory.store_id")
        .join("truffle", "truffle.id", "inventory.truffle_id")
        .where("inventory.store_id", req.params.id)
        .then((inventory) =>{
            res.json(inventory);
        })
        .catch((error) =>{
            console.log(error);
            res.status(404).send("Error retrieving inventory list");
        });
};

const getInventory = (req, res) => {
    knex
        .select("inventory.*", "store.name as store_name", "truffle.name as truffle_name")
        .from("inventory")
        .join("store", "store.id", "inventory.store_id")
        .join("truffle", "truffle.id", "inventory.truffle_id")
        .then((inventory) =>{
            res.json(inventory);
        })
        .catch((error) =>{
            console.log(error);
            res.status(404).send("Error retrieving inventory list");
        });
};

const getInventoryItem = (req, res) => {
    knex
        .select("inventory.*", "truffle.name as truffle_name")
        .from("inventory")
        .join("truffle", "truffle.id", "inventory.truffle_id")
        .where("inventory.id", req.params.itemId)
        .then((inventory) =>{
            res.json(inventory);
        })
        .catch((error) =>{
            console.log(error);
            res.status(404).send("Error retrieving inventory list");
        });
};

const postNewItem = (req, res) => {
    if (
      !req.body.truffle_id ||
      !req.body.minimum_truffles_in_container ||
      !req.body.truffles_in_container ||
      !req.body.truffles_sold 
    ) {
      return res.status(400).send("Please fill out all the fields");
    }
    knex("inventory")
      .insert(req.body)
      .then((newItem) => {
        const newItemURL = `/item/${newItem[0]}`;
        res.status(201).location(newItemURL).send(newItemURL);
      })
      .catch((error) =>
        res.status(400).send(`Error creating Inventory: ${error}`)
      );
  };

  const editInventoryItem = (req, res) =>{
    knex("inventory")
      .where({id: req.params.itemId})
      .update(req.body)
      .then((rowsUpdated)=>{
        res.json(rowsUpdated);
      })
      .catch((error)=>{
        res.status(400).send("Error updating inventory item.");
    });
  };

module.exports = {getInventoryList, getInventoryItem, getInventory, postNewItem, editInventoryItem}