const { Router } = require("express");
const { commentsContr } = require("../controllers/comments.controller")

const router = Router()

router.post("/comments", commentsContr.postComm)
router.get("/comments/news/:id", commentsContr.getCommNewsId)
router.delete("/comments/:id", commentsContr.deleteComm)

module.exports = router