const { Router } = require("express");
const { newsController } = require("../controllers/news.controllers");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsId);
router.get("/news/categories/:id", newsController.getCategoriesNewsId);
router.post("/news", newsController.postNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news/:id", newsController.patchNews);

module.exports = router;
