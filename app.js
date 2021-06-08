// requiring essential modules
const mongoose = require('mongoose');

// making a connection to mongo database
// here fruitsDb is the name of database which we want to either create or modify
mongoose.connect("mongodb://localhost:27017/fruitsDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// Blueprint o structure of data that we are going to save in our mongodb database
// In the schema,{...} means that basically we are trying to create a javascript object which is a scaffold of how we want our data.
const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

// We use the schema to create a model.
// first parameter := name of the collection that is going to comply with this particular schema 
// second parameter := structure or schema to be used..here it is fruitSchema
// THIS IS A COLLECTION
const Fruit = mongoose.model("Fruit",fruitSchema);

// Now we need to create a new fruit document
// THIS IS A DOCUMENT
const fruit = new Fruit({
    name:'Apple',
    rating:5,
    review:"Awesome!"
});

// this calls the save method in Mongoose to save this fruit document into a fruit collection inside our fruitsDB.
// Everytime I run this ap, this below line will save the same document again and again to database
// so I am commenting out this line for now.
/* fruit.save(); */