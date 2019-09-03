const express = require("express");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

//routes
app.get("/", async (req, res) => {
  try {
    const event = await db.event.findAll({});
    const networking = await db.networking.findAll({});
    res.render("index", { event: event, networking: networking });
  } catch (err) {
    console.log(err);
  }


});

app.post("/devrus/models/events", (req, res) => {
  db.event.create(req.body).then(() => res.redirect("/"));
});

app.post("/devrus/models/networking/", (req, res) => {
  db.networking.create(req.body).then(() => res.redirect("/"));
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
