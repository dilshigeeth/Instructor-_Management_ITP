const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const instructorRoutes = require('./routes/instructors');
const lecturerRoutes = require('./routes/lecturers');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(instructorRoutes);
app.use(lecturerRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://root:dilshi99@cluster0.cfj8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});