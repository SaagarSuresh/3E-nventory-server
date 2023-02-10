const router = require("express").Router();
const inventoryController = require("../controllers/inventoryControllers");

router.route("/:id").get(inventoryController.getInventoryList);

module.exports = router;