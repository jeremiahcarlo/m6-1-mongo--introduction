'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()

const {createGreeting} = require('./exercises/exercise-2')
const PORT = process.env.PORT || 8001;

app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(__dirname + '/'))

  // exercise 1
// .get()
  // exercise 2
app.post('/ex-2/greeting', createGreeting)
// handle 404s
app.use((req, res) => res.status(404).type('txt').send('🤷‍♂️'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
