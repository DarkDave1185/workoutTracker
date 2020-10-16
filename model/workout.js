const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please Enter Excersise name",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter name",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
        required: "Enter Weight",
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;
