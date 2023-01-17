const router = require("express").Router();

const Person = require("../models/Person");

router.post("/", async (req, res) => {
  const { name, salary, approved } = req.body;

  if (!name || !salary || approved === undefined || typeof approved !== "boolean") {
    res.status(422).json({ message: "Name, salary, and approved fields are required" });
    return;
  }

  const person = {
    name,
    salary,
    approved
  };

  try {
    const result = await Person.create(person);
    res.status(201).json({ message: "Record created successfully", data: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error: Couldn't create the record. Internal Server Error" });
    return;
  }
});

router.get("/", async (req, res) => {
  try {
    const doc = await Person.find();
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error: Couldn't retrieve the records. Internal Server Error" });
    return;
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await Person.findById(id);
    if (!doc) {
      res.status(404).json({ error: "Error: Couldn't find the record." });
      return;
    }
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error: Couldn't retrieve the record. Internal Server Error" });
    return;
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, salary, approved } = req.body;
  const person = {
    name,
    salary,
    approved
  };

  try {
    const updatedDoc = await Person.updateOne({ _id: id }, person);

    if (updatedDoc.matchedCount === 0 || !updatedDoc) {
      res.status(404).json({ error: "Error: Couldn't find the record." });
      return;
    }

    res.status(200).json({ message: "The record has been updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error: Couldn't update the record. Internal Server Error" });
    return;
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Person.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }

    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error: Couldn't delete the record. Internal Server Error" });
    return;
  }
});

module.exports = router;
