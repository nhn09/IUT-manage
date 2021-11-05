const express = require("express");
const Conferences = require("../../model/conferences");
const router = express.Router();
const ObjectId = require('mongodb').ObjectId

router.get("/", async (req, res) => {
  try {
    const conferences = await Conferences.find().exec();
    res.send(conferences);
  } catch (error) {
    res.json(error);
  }
});

//post
router.post("/", async (req, res) => {
  const conference = new Conferences({
    title: req.body.Title,
    description: req.body.Description,
    location: req.body.Location,
    date: req.body.Date,
    cost: req.body.Cost,
  });

  conference
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

//delete

router.delete('/:id' , async (req,res)=>{
  const id = req.params.id
  const query = {_id: ObjectId(id) }
  const result = await Conferences.deleteOne(query).exec();
  res.json(result)
})

module.exports = router;
