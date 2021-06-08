const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/peopleDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const People=  mongoose.model('People',peopleSchema);

const people=  new People({
    name:"Lakshit Somani",
    age:20
});

people.save();