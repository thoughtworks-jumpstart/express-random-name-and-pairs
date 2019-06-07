# express-random-name-and-pairs

The purposes of this lab is as follows

1. practice writing CRUD
2. practice testing with supertest
3. returning of appropriate error code

## Expectations

### Finish the following endponts and test associated with the endpoints

1. GET /name will return a random name. Name will not repeat till exhausted.
2. Get /pairs will return an array of pairs.
3. Get /names will return all the names available
4. POST /names will take in a json in the body and will add the name from the list of names.
5. DELETE /names will take in a json in the body and will remove the name from the list of names.
6. PUT /names will take in a json with a oldName and newName and will replace the oldName with the newName

### Validation

1. if a missing input is provided, response should return with 400 BAD REQUEST
2. if required input fields are available but could not proceed, return 422 UNPROCESSABLE ENTITY

- i.e. name is in the list when add
- i.e. name is not in the list when delete
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
