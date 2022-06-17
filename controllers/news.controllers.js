const News = require("../models/News.model");

module.exports.newsController = {
  getNews: async (req, res) => {
    try {
      let news = await News.find({});
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },
  getNewsId: async (req, res) => {
    const { id } = req.params;
    try {
      let news = await News.findById(id);
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },
  getCategoriesNewsId: async (req, res) => {
    try {
      let news = await News.find({ categoryId: req.params.id });
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },

  deleteNews: async (req, res) => {
    const { id } = req.params;
    try {
      await News.findByIdAndRemove(id);
      res.json("Новость удалена");
    } catch (error) {
      console.log(error);
    }
  },

  postNews: async (req, res) => {
    const { title, text, categoryId } = req.body;
    try {
      await News.create({
        title,
        text,
        categoryId,
      });
      res.json("Новость добавлена");
    } catch (error) {
      res.json(error);
    }
  },
  patchNews: async (req, res) => {
    const { id } = req.params;
    const { title, text, categoryId } = req.body;
    try {
      await News.findByIdAndUpdate(id, { title, text, categoryId }),
        res.json("новость изменена");
    } catch (error) {
      console.log(error);
    }
  },
};
