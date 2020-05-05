const dbFunction = async (dbName) => {
  // create a new client
  const client = new MongoClient('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  });
  // open the connection to the database server
  await client.connect();
  console.log('connected!');

  const db = client.db(dbName);

  // close the connection to the database server
  client.close();
  console.log('disconnected!');
};

const getCollection = async (req, res) => {
  res.status(200).json({ status: 200, connection: 'successful!' });
};