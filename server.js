// Required technologies
const express = require("express");
const app = express();
const routes = require("./routes")


//  middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting to MongoDB
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactgooglebooks");


// Serving static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
