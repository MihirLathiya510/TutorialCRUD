[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# TutorialCRUD

## Design an app to manage Tutorials

This task is all about to learn the NODE.JS, And all the api works with documentation.

# Tech

- [Node] - evented I/O for the backend
- [Expres] - fast node.js network app framework
- [MongoDb] - NoSQL database program

## Note

- title: string|min:3|max:100|required
- description: string|min:1|max:5000|required
- published: boolean

- Autogenerated:
  -- id: uuid
  -- createdAt: datetime
  -- updatedAt: datetime

## APIs

- Create a Tutorial
- Update a Tutorial by ID
- Delete a Tutorial by ID
- Get all Tutorials
  -- Able to search by Title
  -- Able to sort by crated/updated date (Default updated DESC)

# Dependencies and Dev-Dependencies

- "dotenv": "^10.0.0"
- "express": "^4.17.2"
- "joi": "^17.5.0"
- "mongoose": "^6.1.4"
- "morgan": "^1.10.0"
- "nanoid": "^3.1.30"
- "nodemon": "^2.0.15"
- "swagger-jsdoc": "^6.1.0"
- "swagger-ui-express": "^4.3.0"
- "cz-conventional-changelog": "^3.3.0"
- "eslint": "^8.6.0"
- "eslint-config-airbnb-base": "^15.0.0"
- "eslint-config-prettier": "^8.3.0"
- "eslint-plugin-import": "^2.25.4"
- "eslint-plugin-prettier": "^4.0.0"
- "husky": "^7.0.4"
- "lint-staged": "^12.1.5"
- "prettier": "2.5.1"
- "prettier-eslint": "^13.0.0"
- "prettier-eslint-cli": "^5.0.1"

## Installation

TutorialCRUD requires [Node.js](https://nodejs.org/) v17 to run.

Install the dependencies and devDependencies and start the server.

```sh
// in TutorialCRUD Directory
npm i
```

For Run the app .

```sh
npm run tutorial
```

> Note: this uses the Swagger for documentation, runs on port 3000 with path 'http://localhost:3000/swagger'

![swagger.png](assets/img/swagger.png?raw=true 'swagger')

## License

MIT
