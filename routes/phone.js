const express = require("express");
const router = express.Router();
const phoneContoller = require("../Contollers/phone");
const Phone = new phoneContoller();

router.get("/", Phone.index);
router.delete("/:id", Phone.delete);
router.post("/", Phone.create);

module.exports = router;
