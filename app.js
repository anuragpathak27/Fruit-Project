// come back do this module again
// code not running


const { Db } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please check your data entry, no name specfied!"]
    },
    rating:{
        type: Number,
        min : 1,
        max : 10
    },
    review:String
});


const Fruit = mongoose.model("Fruit",fruitSchema);
// const fruits = client.db().collection<fruit>('fruits');


const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit"
});


const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
});


const People = mongoose.model("People",peopleSchema);

const pineapple = new Fruit({
    name:"Pineapple",
    score : 0,
    review : "Great Fruit"
});

pineapple.save();

const people = new People({
    name: "Amy",
    age : 12,
    favouriteFruit: pineapple
});

People.updateOne({name:"John"},{favouriteFruit:pineapple});


// const people = new People({
//     name: "John",
//     age : 37
// });

const kiwi = new Fruit({
    name:"Kiwi",
    rating :10,
    review :"The best fruit"
});


const orange = new Fruit({
    name:"Orange",
    rating :4,
    review :"The sour of me"
});


const banana = new Fruit({
    name:"Banana",
    rating :3,
    review :"Weird Texture"
});

Fruit.insertMany([kiwi,orange,banana]);

console.log(Fruit.find(fruit.name));

Fruit.updateOne({_id:"649d153c4a8fc056bb808044"}, {name:"Peach"});

Fruit.deleteOne({name:"Peach"});

Fruit.deleteMany({name:"John"});


// fruit.save();
people.save();

mongoose.connection.close();

// mongoose.connection.db.collection('experiences', function (err, collection) {
//     if (err) throw err;
//     collection.find({}).toArray(function (err, experiences) {
//       res.send(experiences)
//     });
//   });