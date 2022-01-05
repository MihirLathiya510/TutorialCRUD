const express = require('express');
const router = express.Router();

const tutorialController=require('../controller/tutorials')



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