const mongoose = require("mongoose");
const Categories = require("./categories.model");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
