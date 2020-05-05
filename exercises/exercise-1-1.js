const { MongoClient } = require('mongodb');
require("dotenv").config({path:"../.env"});
console.log(process.env.mongoURI) 

const dbFunction = async (dbName) => {
  // create a new client
  const client = new MongoClient( process.env.mongoURI, {
    useUnifiedTopology: true,
  });
  // open the connection to the database server
  await client.connect();
  console.log('connected!');

  const db = client.db(dbName);
  await db.collection('collection1').insertOne({ name: 'Buck Rogers' }); 
  // close the connection to the database server
  client.close();
  console.log('disconnected!');
};

dbFunction('exercise_one');
