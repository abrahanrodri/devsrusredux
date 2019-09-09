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

router.get("/events/delete/:id", async (req, res) => {
  try {
    // this doesnt work testing
    const response = await db.event.destoy({ where: { id: req.params.id }})
    return res.status(200).send(response)
  } catch (error) {
    console.log("ERROR IN DESTROY")
    res.status(404).send(error)
  }
})

router.post("/users/loginOrRegister", async (req, res) => {
  console.log(req.body)
  try {
    const response = await db.user.findAll({ where: {
      uid: req.body.uid
    }})
    if (response.length){
      return res.status(200).send(response)
    }
    
    const newUser = await db.user.create({
      ...req.body,
      name: req.body.displayName
    });
    return res.status(200).send(newUser)
    
  } catch (error) {
    res.status(404).send(error)
  }
})

module.exports = router;
