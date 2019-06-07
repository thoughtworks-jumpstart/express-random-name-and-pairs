const express = require('express');
const app = express();
const NameHelper = require('./name-helper');

app.use(express.json());

let randomNames = [];
app.get('/name', (req, res) => {
  if (!randomNames.length) {
    randomNames = NameHelper.getRandomName(NameHelper.names);
  }

  res
    .status(200)
    .send(
      `${NameHelper.names.length -
        randomNames.length +
        1}. ${randomNames.shift()}`
    );
});

/**
 * @get
 * @route('/pairs')
 * @reponse([
 *  {"first":"Gaurav","second":"JinJia"},
 *  {"first":"Shalini","second":"Dennis"}
 *  ...
 * ])
 */
app.get('/pairs', (req, res) => {
  const pairs = [];
  res.json(pairs);
});

/**
 * @get
 * @route('/names')
 * @reponse([
 *   "Jessen", "Kai", "Shalini", "Gaurav", "Eddie", ...
 * ])
 */
app.get('/names', (req, res) => {
  // TODO: finish this function
});

/**
 * @post
 * @route('/names')
 * @request({body: {name: "John"}})
 * @reponse([
 *   "Jessen", "Kai", "Shalini", "Gaurav", "Eddie", ...
 * ])
 */
app.post('/names', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.sendStatus(400);
  } else if (NameHelper.names.includes(name)) {
    return res.sendStatus(422);
  } else {
    NameHelper.names.push(name);
    return res.json(NameHelper.names);
  }
});

/**
 * @delete
 * @route('/names')
 * @request({body: {name: "Jessen"}})
 * @reponse([
 *   "Kai", "Shalini", "Gaurav", "Eddie", ...
 * ])
 */
app.delete('/names', (req, res) => {
  // TODO: finish this function
});

/**
 * @put
 * @route('/names')
 * @request({body: {oldName: "Kai", newName: "Guy"}})
 * @reponse([
 *   "Jessen", "Guy", "Shalini", "Gaurav", "Eddie", ...
 * ])
 */
// TODO: implement a post function that
//  checks if oldName and newName are present in the request body
//  checks if oldName is in the current list of name
//  checks if newName is NOT in the current list of name
//  replace the oldName with the newName and return the the array;

module.exports = app;
