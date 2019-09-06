const router = require("express").Router();
var db = require("../models");

router.get("/events", async (req, res) => {
  try {
    const response = await db.event.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.send("error");
  }
});

router.post("/eventpage", async (req, res) => {
  try {
    const response = await db.event.create(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
