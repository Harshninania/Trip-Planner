const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const path = require('path');
const temppath = path.join(__dirname, "hbs_files");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", temppath);

// Connecting to MongoDB
const uri = 'mongodb://127.0.0.1:27017/my_database';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const projectSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', projectSchema);

const validateEmail = (email) => {
  const parts = email.split('@');
  return parts.length === 2;
};

// Serve the index.html file from the same directory
app.get('/', (req, res) => {
  res.render("index");
});

// Sign-up page
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  console.log('Received data:', { username, email, password });

  // Authentication of user
  if (!username || !email || !password) {
    return res.status(400).json({
      msg: 'All fields are required',
    });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({
      msg: 'Your email ID is not valid',
    });
  }

  // Checking for existing user
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        msg: 'User already exists',
      });
    }

    // If user does not exist, hash the password and save the new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User saved:', newUser);
    res.status(201).json({
      msg: 'User registered successfully',
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({
      msg: 'An error occurred',
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
