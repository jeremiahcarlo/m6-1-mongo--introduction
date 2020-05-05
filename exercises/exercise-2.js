const createGreeting = async (req, res) => {
// temporary content... for testing purposes.
console.log(req.body);
res.status(200).json('ok');
try {
  // TODO: connect...
  // TODO: declare 'db'
  // We are using the 'exercises' database
  // and creating a new collection 'greetings'
  } catch (err) {
  console.log(err.stack);
  }
};

module.exports={createGreeting}
