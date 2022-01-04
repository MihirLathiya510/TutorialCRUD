const express = require('express');
const router = express.Router();

const tutorialController=require('../controller/tutorials')
const idLength = 8;
/** 
 * @swagger
 * {
    "tags": [
      {
        "name": "Tutorials",
        "description": "Everything about managing Tutorials"
      }
    ],
     "definitions": { 
        "Tutorials": {
          "type": "object",
         
          "properties": {
            
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "published": {
                "type": "boolean"
            }
          
          }
        }
      },
    "paths": {
      "/tutorials": {
        "get": {
          "summary": "Returns the list of Tutorials",
          "tags": ["Tutorials"],
          "produces": [
              "application/json"
            ],
            "parameters": [
              {
                  "name":"sorting",
                  "in":"query",
                  "description":"sort by [asc,desc]",
                  "required": true,
                  "type":"string",
                  "schema": {
                    "type":"string",
                    "enum":[
                    "asc","desc"
                  ]
                  }

              },
              {
                  "name":"at",
                  "in":"query",
                  "description":"sort by [field name]",
                  "required": true,
                  "type":"string",
                  "schema": {
                    "type":"string",
                    "enum":[
                    "createdAt","updatedAt"
                  ]
                  }

              }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "Invalid username supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
        
      },
      "/tutorials/getsorted/sorted/": {
        "get": {
          "summary": "Returns the list of Tutorials by updated time in DESC order",
          "tags": ["Tutorials"],
          "produces": [
              "application/json"
            ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "Invalid username supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
        
      },
      "/tutorials/{id}": {
        "get": {
          "summary": "Returns the list of Tutorials by id",
          "tags": ["Tutorials"],
          "produces": [
              "application/json"
            ],
          "parameters": [
              {
                  "name":"id",
                  "in":"path",
                  "description":"id of the tutorial to retrieve",
                  "required": true,
                  "type":"integer",
                  "format":"int64"

              }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "Invalid username supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
        
      },
      "/tutorials/searchbytitle/{title}": {
        "get": {
          "summary": "Returns the list of Tutorials by title/ search by title",
          "tags": ["Tutorials"],
          "produces": [
              "application/json"
            ],
          "parameters": [
              {
                  "name":"title",
                  "in":"path",
                  "description":"title of the tutorial to retrieve",
                  "required": true,
                  "type":"string"
                  

              },
               {
                  "name":"sorting",
                  "in":"query",
                  "description":"sort by [asc,desc]",
                  "required": true,
                  "type":"string",
                  "schema": {
                    "type":"string",
                    "enum":[
                    "asc","desc"
                  ]
                  }

              },
              {
                  "name":"at",
                  "in":"query",
                  "description":"sort by [field name]",
                  "required": true,
                  "type":"string",
                  "schema": {
                    "type":"string",
                    "enum":[
                    "createdAt","updatedAt"
                  ]
                  }

              }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "Invalid username supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
        
      },
       "/tutorials/post": {
        "post": {
          "summary": "add the tutorial to the database",
          "tags": ["Tutorials"],

          "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/definitions/Tutorials"
                  }
                }
              }
          },
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "some error"
            },
            "500": {
              "description": "some server error"
            }
          }
        }
        
      },
        "/tutorials/put/{id}": {
        "put": {
          "summary": "add the tutorial to the database",
          "tags": ["Tutorials"],
          "parameters": [
              {
                  "name":"id",
                  "in":"path",
                  "description":"id of the tutorial to retrieve",
                  "required": true,
                  "type":"string"
                  

              }
          ],
          "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/definitions/Tutorials"
                  }
                }
              }
          },
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "some error"
            },
            "500": {
              "description": "some server error"
            }
          }
        }
        
      },
        "/tutorials/delete/{id}": {
        "delete": {
          "summary": "add the tutorial to the database",
          "tags": ["Tutorials"],
           "parameters": [
              {
                  "name":"id",
                  "in":"path",
                  "description":"id of the tutorial to retrieve",
                  "required": true,
                  "type":"integer",
                  "format":"int64"

              }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Tutorials"
              }
            },
            "400": {
              "description": "some error"
            },
            "500": {
              "description": "some server error"
            }
          }
        }
        
      }
     
     
     
      
    }
    
  }
*/

//get
router.get('/',tutorialController.getTutorial);
router.get('/:id',tutorialController.findTutorial);
router.get('/searchbytitle/:title',tutorialController.findByTitleTutorial);
router.get('/getsorted/sorted',tutorialController.getSortedTutorial);
//post
router.post('/post',tutorialController.postTutorial)
//put
router.put("/put/:id",tutorialController.putTutorial);
//delete
router.delete("/delete/:id",tutorialController.deleteTutorial);

module.exports=router;