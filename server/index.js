const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require('./Routes/authRoutes')
const usersRoutes = require('./Routes/usersRoutes');
const tasksRoutes = require('./Routes/taskRoutes');
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
// app.use(morgan("common"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
dotenv.config();
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if(err) 
      throw err;
  console.log('Connected to mongodb')
})

app.get('/', (req, res) => {
  res.send("Hello ");
});

app.use('/api/auth', authRoutes);
app.use('/api/user', usersRoutes);
app.use('/api/task', tasksRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})

