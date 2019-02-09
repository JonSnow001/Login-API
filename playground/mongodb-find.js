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
  db.collection('Student').find()
    .toArray().then((docs) => {

      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch Login', err);
    });
  //client.close();
});