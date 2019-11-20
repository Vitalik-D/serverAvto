const express = require("express");
const router = express.Router();
const buyContoller = require("../Contollers/buy");
const Buy = new buyContoller();

router.get("/", Buy.index);
router.delete("/:id", Buy.delete);
router.post("/", Buy.create);

module.exports = router;
