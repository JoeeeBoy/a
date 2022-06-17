const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require("./routes/news.route"));
app.use(require("./routes/categories.route"));
app.use(require("./routes/comments.route"))

mongoose
  .connect(
    "mongodb+srv://adlan:begaev@cluster0.uhqp6.mongodb.net/news?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4800, () => {
  console.log(`Сервер запущен успешно http://localhost:4400`);
});
