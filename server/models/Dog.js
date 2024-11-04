const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: {
      type: String,
    },
  
    breed: {
      type: String,
    },

    age: {
        type: Number,
      },
  
    createdDate: {
      type: Date,
      default: Date.now,
    },
  
  });

  DogModel = mongoose.model('Dog', DogSchema);
  
  // We only want to export the cat model, so we can overwrite the entire exports object.
  module.exports = DogModel;