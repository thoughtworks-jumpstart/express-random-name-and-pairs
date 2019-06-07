# express-random-name-and-pairs

The purposes of this lab are as follows

1. practice writing CRUD
2. practice testing with supertest
3. returning of appropriate error code

## Expectations

### Finish the following endpoints and test associated with the endpoints

1. GET /name will return a random name. The name will not repeat until exhausted.
2. GET /pairs will return an array of pairs.
3. GET /names will return all the names available
4. POST /names will take in a JSON in the body and will add the name from the list of names.
5. DELETE /names will take in a JSON in the body and will remove the name from the list of names.
6. PUT /names will take in a JSON with an oldName and newName and will replace the oldName with the newName

### Validation

1. if there a missing input, the response should return with 400 BAD REQUEST
2. if required input fields are available but could not proceed, return 422 UNPROCESSABLE ENTITY

- i.e. the name is in the list when adding
- i.e. the name is not in the list when deleting
- i.e. name to replace is not in the list or new name provided is in the list

## Start the app

```
  npm install
  npm run nodemon
```

## run Test

```
  npm run test
```

## run test coverage

```
  npm run test coverage
```
