// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb'); //using object destructuring
MongoClient.connect('mongodb://localhost:27017/Login', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Succesfully connected to MongoDB server');
  }
  const db = client.db('Login');
  db.collection('Student').findOneAndUpdate({
    _id: new ObjectID('5c5e9a00274b333d4c1f7d3d')
  }, {
    $set: {
      text: 'Shubham Tiwari'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //client.close();
});