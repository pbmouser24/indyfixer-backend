const db = require("../db");

// Create a model from the schema
const Ad = db.model("Ad", {  
   ServiceRequest: { type: String, required: true },
   Desc:       { type: String, required: true },
   DatePosted: { type: Date, default: Date.now },  
   JobCategory: { type: String, required: true },
   DateNeeded: { type: Date, default: Date.now }, 
   TimeSlot: { type: String, required: true },
   email:  { type: String, required: true },
   City:  { type: String, required: true },
   ZipCode:  { type: String, required: true },
});

module.exports = Ad;