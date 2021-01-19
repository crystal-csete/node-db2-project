const express = require("express");
const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  db("cars")
    .then((cars) => {
      res.status("200").json(cars);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  db("cars")
    .where({ id })
    .first()
    .then((car) => {
      res.json(car);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((ids) => {
      db("cars")
        .where({ id: ids[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  const env = process.env.NODE_ENV || "development";
  const message = env === "development" ? err.message : "something went wrong!";
  res.status(500).json(message);
});

module.exports = router;
