const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Assume the schema definition is the same as before
const letterSchema = new Schema(
  {
    dynamicFields: {
      type: Map,
      of: String,
    },
    // Assume other fields as necessary
  },
  {
    timestamps: true,
  }
);

const Letters = mongoose.model("Letters", letterSchema);

// Function to append to an existing Letter document or create a new one with dynamic fields

async function appendOrCreateLetterWithDynamicFields(dynamicData, searchCriteria) {
    console.log("Akhil, Abhinay")
    try {
    // Attempt to find an existing document based on the provided search criteria
    let letter = await Letters.findOne(searchCriteria);

    if (letter) {
      // If an existing document is found, append new dynamic fields
      const existingFields = letter.dynamicFields.toObject();
      const updatedFields = { ...existingFields, ...dynamicData };

      letter.dynamicFields = new Map(Object.entries(updatedFields));
    } else {
        console.log("Akhil, Abhinay")
      // If no existing document is found, create a new one
      const dynamicFields = new Map(Object.entries(dynamicData));
      letter = new Letters({ dynamicFields });
    }

    // Save the updated or new document to the database
    await letter.save();

    console.log("Letter saved or updated:", letter);
    return letter;
  } catch (err) {
    console.error("Error saving or updating letter:", err);
    throw err;
  }
}

module.exports = { appendOrCreateLetterWithDynamicFields };
