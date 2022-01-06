[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Project 1 :

Tech: NodeJS, MongoDB
Description: Design an app to manage Tutorials

Note:

- title: string|min:3|max:100|required
- description: string|min:1|max:5000|required
- published: boolean

- Autogenerated:
  -- id: uuid
  -- createdAt: datetime
  -- updatedAt: datetime

APIs:

- Create a Tutorial
- Update a Tutorial by ID
- Delete a Tutorial by ID
- Get all Tutorials
  -- Able to search by Title
  -- Able to sort by crated/updated date (Default updated DESC)
