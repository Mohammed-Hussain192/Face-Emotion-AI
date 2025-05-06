const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();




// Serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render("landing"); 
});


app.get("/register/user", (req, res) => {
  res.render("register"); 
});

app.get("/login/user", (req, res) => {
  res.render("login"); 
});
app.get("/home/", (req, res) => {
  res.render("home"); 
});
// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
