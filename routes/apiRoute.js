const { response } = require("express");
const db = require("../model");

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .limit(1)
      .then(function (data) {
        console.log("testing the api call");
        res.json(data);
      });
  });

  app.post("/api/workouts", (req, res) => {
    // getting data from front end

    // POST is only creating the ID and PUT will fill the document created by POST
    db.Workout.create({
      day: new Date().setDate(new Date().getDate()),
    }).then((response) => {
      res.json(response);
      console.log(response);
    });
  });

  app.put("/api/workouts/:id", (req, res) => {
    let params = req.params;

    let input = req.body;
    console.log(input);

    db.Workout.updateOne(
      { _id: params.id },
      {
        $push: {
          exercises: [
            {
              type: input.type,
              name: input.name,
              duration: input.duration,
              distance: input.distance,
              weight: input.weight,
              reps: input.reps,
              sets: input.sets,
            },
          ],
        },
      }
    ).then((response) => {
      console.log(response);
      res.json(response);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    // finding all exercises
    db.Workout.find({}).then((response) => res.json(response));
  });
};
