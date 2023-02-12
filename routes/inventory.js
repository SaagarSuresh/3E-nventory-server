const router = require("express").Router();
const inventoryController = require("../controllers/inventoryControllers");

router.route("/:id").get(inventoryController.getInventoryList);
router.route("/").get(inventoryController.getInventory);
router.route("/item").post(inventoryController.postNewItem);
router.route("/item/:itemId").get(inventoryController.getInventoryItem);
router.route("/item/:itemId").patch(inventoryController.editInventoryItem);
router.route("/item/:itemId").delete(inventoryController.deleteInventoryItem);

module.exports = router;