const express = require("express");
const router = express.Router();
const productContoller = require("../Contollers/product");
const Product = new productContoller();

router.get("/", Product.index);
router.get("/:id", Product.read);
router.post("/", Product.create);
router.delete("/:id", Product.delete);
router.put("/:id", Product.update);

module.exports = router;
