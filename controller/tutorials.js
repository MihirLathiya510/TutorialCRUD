/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const express = require('express');
const Tutorial = require('../models/tutorials');
const routes = require('../models/tutorials');
const validator = require('../helper/joischemas');

exports.getTutorial = (req, res) => {
  let sorting = req.query.sorting;
  if (sorting === 'asc') {
    sorting = 1;
  } else {
    sorting = -1;
  }
  let field = req.query.at;
  if (field == 'createdAt') {
    // eslint-disable-next-line quote-props
    field = { 'createdAt': sorting };
  } else {
    // eslint-disable-next-line quote-props
    field = { 'updatedAt': sorting };
  }
  console.log(field);
  // eslint-disable-next-line no-shadow
  const tutorial = Tutorial.find().sort(field).then((tutorial) => {
    res.json({
      tutorial,
    });
  }).catch((err) => {
    console.log(err);
  });
};
exports.getSortedTutorial = (req, res) => {
  const sort = { updatedAt: -1 };
  const tutorial = Tutorial.find().sort(sort).then((tutorial) => {
    if (!tutorial || tutorial == '') {
      res.send('Tutorial Not Found');
    } else {
      res.json({
        tutorial,
      });
    }
  }).catch((err) => {
    console.log(err);
  });
};
exports.postTutorial = async (req, res, next) => {
  try {
    const resultvalidated = await validator.swaggerschemasPOST.validateAsync(req.body);
    // console.log(result.body);
    const tutorial = new Tutorial(resultvalidated);
    tutorial.save().then((results) => {
      res.status(200).json({
        results,
      });
    });
  } catch (error) {
    res.status(422).json(error.message);
  }
};
exports.putTutorial = async (req, res) => {
  try {
    const id = req.params.id.match(/^[0-9a-fA-F]{24}$/);
    if (id == null) {
      throw new Error('check your id');
    } else {
      const resultBody = await validator.swaggerschemasPUT.validateAsync(req.body);
      const tutorial = await Tutorial.findByIdAndUpdate(id, {
        title: resultBody.title,
        description: resultBody.description,
        published: resultBody.published,
      }, { new: true }).then((result) => {
        if (!result || result == '') {
          res.send('Tutorial Not Found');
        } else {
          res.json({
            result,
          });
        }
      });
    }
  } catch (error) {
    if (error.isJoi) {
      res.status(422).send(error.message);
    } else {
      res.status(422).send(error.message);
    }
  }
};
exports.deleteTutorial = (req, res) => {
  try {
    const id = req.params.id.match(/^[0-9a-fA-F]{24}$/);
    if (id == null) {
      throw new Error('check your id');
    }
    const tutorial = Tutorial.findByIdAndRemove(id).then((result) => {
      if (!result || result == '') {
        res.send('Tutorial Not Found');
      } else {
        res.json({
          result,
        });
      }
    });
  } catch (error) {
    res.status(422).send(error.message);
  }
};
exports.findTutorial = async (req, res) => {
  try {
    const id = req.params.id.match(/^[0-9a-fA-F]{24}$/);
    if (id == null) {
      throw new Error('check your id');
    }
    const tutorial = await Tutorial.findById(id).then((result) => {
      if (!result || result == '') {
        res.send('Tutorial Not Found');
      } else {
        res.json({
          result,
        });
      }
    });
  } catch (error) {
    res.status(422).send(error.message);
  }
};
exports.findByTitleTutorial = async (req, res) => {
  try {
    // eslint-disable-next-line prefer-destructuring
    const title = req.params.title;
    let sorting = req.query.sorting;
    if (sorting === 'asc') {
      sorting = 1;
    } else {
      sorting = -1;
    }
    let field = req.query.at;
    if (field === 'createdAt') {
      field = { 'createdAt': sorting };
    } else {
      field = { 'updatedAt': sorting };
    }
    const tutorial = await Tutorial.find({ title }).sort(field).then((result) => {
      if (!result || result == '') {
        res.send('Tutorial Not Found');
      } else {
        res.json({
          result,
        });
      }
    });
  } catch (error) {
    res.status(422).send(error.message);
  }
};
