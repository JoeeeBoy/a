const Comments = require("../models/Comments.model");

module.exports.commentsContr = {
  postComm: async (req, res) => {
    let { nameUser, text, newsId } = req.body;

    try {
      await Comments.create({
        nameUser,
        text,
        newsId,
      });
      res.json("Комментарий добавлен");
    } catch (error) {
      console.log(error);
    }
  },

  deleteComm: async (req, res) => {
    const { id } = req.params;
    try {
      await Comments.findByIdAndRemove(id);
      res.json(`Комметарий c ${id} удален`);
    } catch (error) {
      console.log(error);
    }
  },
  getCommNewsId: async (req, res) => {
    try {
      let comment = await Comments.find({ newsId: req.params.id });
      res.json(comment);
    } catch (error) {
      res.json(error);
    }
  },
};
