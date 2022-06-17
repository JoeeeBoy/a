const Categories = require("../models/categories.model");

module.exports.cotegoriesContr = {
  postCategories: async (req, res) => {
    let { name } = req.body;

    try {
      await Categories.create({
        name,
      });
      res.json(`Категория ${name} добавлена`);
    } catch (error) {
      console.log(error);
    }
  },

  deleteCategories: async (req, res) => {
    try {
      res.json(`Удален категория ${(await Categories.findByIdAndDelete(req.params.id)).name}`);
    } catch (error) {
      console.log(error);
    }
  },
  getCategories: async (req, res) => {
    try {
      let Categoriess = await Categories.find({});
      res.json(Categoriess);
    } catch (error) {
      console.log(error); 
    }
  },
};
