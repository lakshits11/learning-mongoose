const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const People = mongoose.model("People", peopleSchema);

const lakshit = new People({
    name: "Lakshit Somani",
    age: 20,
});

const pratiti = new People({
    name: "Pratiti Somani",
    age: 12,
});

const rekha = new People({
    name: "Rekha Samriya",
    age: 46,
});

// If we call it many times, same people will be added in our database many times.
// So I called it once and now when I am runnning other queries such as People.find(...), I am commenting this out.
/*
People.insertMany([lakshit, pratiti, rekha], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits");
    }
});
*/

People.find((err, people) => {
    if (err) {
        console.log(err);
    } else {
        console.log(people);
    }
});
