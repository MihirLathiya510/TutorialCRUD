const express = require('express');
const logger = require('morgan');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const tutorialRoutes = require('./routes/tutorials');

dotenv.config();
// app area
const app = express();
const PORT = process.env.PORT || 3000;
// swagger

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TutorialCRUD',
      description: 'CRUD operations related to given task',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};
const specs = swaggerJsDoc(options);

// middleware

app.use(express.json());
app.use(logger('dev'));
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/tutorials', tutorialRoutes);
// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log('DB connected');
});

// server
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
