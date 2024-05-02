const mongoose = require("mongoose");

const cusSchema = new mongoose.Schema({
  FirstName: {
    type: String, // data type
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  AccountUsername: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Province: {
    type: String,
    required: true,
  },
  Zip: {
    type: String,
    required: true,
  },

  ChooseItem: {
    type: String,
    enum: ['ring', 'chain', 'earring', 'bracelet', 'pendant', 'necklace', 'bangle'],
    required: true,
  },
  ChooseDesign: {
    type: String,
    required: true,
  },
  MaterialNumber: {
    type: String,
    required: true,
  },
  Material1: {
    type: String,
    required: true,
  },
  MaterialWeight1: {
    type: String,
    required: true,
  },
  Material2: {
    type: String,
    required: true,
  },
  MaterialWeight2: {
    type: String,
    required: true,
  },
  Material3: {
    type: String,
    required: true,
  },
  MaterialWeight3: {
    type: String,
    required: true,
  },
  AttributeType: {
    type: String,
    required: true,
  },
  Dimension: {
    type: String,
    required: true,
  },
  ChooseStoneType: {
    type: String,
    required: true,
  },
  ChooseStone: {
    type: String,
    required: true,
  },
  StoneWeight: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Cus', cusSchema);
