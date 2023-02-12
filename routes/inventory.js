const router = require("express").Router();
const inventoryController = require("../controllers/inventoryControllers");

router.route("/:id").get(inventoryController.getInventoryList);
router.route("/").get(inventoryController.getInventory);
router.route("/item").post(inventoryController.postNewItem);
router.route("/item/:itemId").get(inventoryController.getInventoryItem);

module.exports = router;