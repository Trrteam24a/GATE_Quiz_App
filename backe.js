const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
//const cors = require("cors");

// const serviceAccount = require("path/to/keyofservice.json"); // no real key.json file here so wont work
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

const app = express(); // create an Express app/server
const port = 3000;

const uri = 'mongodb+srv://parthkulkarni1602:XB8nFCAXYP8HCJQ5@cluster0.ldbgibz.mongodb.net/?retryWrites=true&w=majority';
MongoClient.connect(process.env.uri);

//const mongoClient = new MongoClient(uri, options);
//connecting mongoDB
MongoClient.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })

  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

  //user schema
  const userSchema = new mongoose.Schema({
    username: String,
    emailID: String,
    Phone: String,

  });
  
  const User = mongoose.model('User', userSchema);
//route for routing requests to the express
app.get("/", (req, res) => {
  console.log(req.url);
  // Vue js async file
  fs.readFile('signpage.vue', 'utf8', (err, data) => {
    if (err) {
      // Handle error
      res.status(500).send('Internal Server Error');
      return;
    }
    res.set('Content-Type', 'text/html');
    res.status(200).send(data);
  });
});

const authenticateFirebase = async (req, res, next) => {
  const idToken = req.header("AuthorizationofGoogle");

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.uid = decodedToken.uid;
    return next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

app.use(authenticateFirebase);

app.post("signin", async (req, res) => {
  //Firebase sign-in Google
});

app.post("signout", (req, res) => {
  // Firebase sign-out
});

app.get("authorization", (req, res) => {
  // authorization check
});

// Start Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//for closing mongodb
// process.on('SIGINT', () => {
//   client.close()
//     .then(() => {
//       console.log('MongoDB connection closed');
//       process.exit(0);
//     });
// });