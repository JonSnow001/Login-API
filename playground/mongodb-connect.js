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
  db.collection('Student').insertOne({
    text: 'name is Shubham'

  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  client.close();
})