const { Router } = require("express");
const { cotegoriesContr } = require("../controllers/categories.controller");
const categories = require("../models/categories.model");
const router = Router();

router.get("/categories", cotegoriesContr.getCategories);
router.post("/categories", cotegoriesContr.postCategories);
router.delete("/categories/:id", cotegoriesContr.deleteCategories);

module.exports = router;
