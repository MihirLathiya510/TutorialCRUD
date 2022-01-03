const express = require('express');
const Tutorial = require("../models/tutorials");
const routes = require("../models/tutorials");


exports.getTutorial = (req, res) => {
    var sorting=req.query.sorting;
    if (sorting=="asc") {
        sorting=1;    
    }else{
        sorting=-1;
    }
    var field=req.query.at;
    if (field=="createdAt"){
        field={"createdAt":sorting}
    }else{
        field={"updatedAt":sorting}
    }
    const tutorial =Tutorial.find().sort(field).then(tutorial => {
        res.json({
            tutorial:tutorial
        })

    }).catch(err => {
        console.log(err);
    })
    // console.log(req.query.sorting);
    // console.log(req.query.at);
};
exports.getSortedTutorial = (req, res) => {
   //console.log("hello",req.body);
    const sort={updatedAt: -1};
    const tutorial =Tutorial.find().sort(sort).then(tutorial => {
        if(tutorial==null){
            res.send("Tutorial Not Found");
        }else{
            res.json({
                tutorial:tutorial
            });
        }

    }).catch(err => {
        console.log(err);
    })
};
exports.postTutorial = (req, res) => {
    //res.send("hello");
    //console.log(req.body); 
    try{
        let tutorial =new Tutorial(req.body);
        tutorial.save().then((result)=>{
        res.status(200).json({
            result:result
        });
    })
    }catch(err){
        res.send(err);
    }
};
exports.putTutorial=async(req,res)=>{
    try{
        let id=req.params.id;
    const tutorial =await Tutorial.findByIdAndUpdate(id,{
        title:req.body.title,
        description:req.body.description,
        published:req.body.published
    },{new:true}).then((result)=>{
        if(result==null){
            res.send("Tutorial Not Found");
        }else{
            res.json({
                tutorial:result
            });
        }
    });    
    }catch(error){
        res.status(400).send(error.message);
    }
    

};
exports.deleteTutorial=(req,res)=>{
   try{
    let id=req.params.id;
    const tutorial = Tutorial.findByIdAndRemove(id).then((result)=>{
        if(result==null){
            res.send("Tutorial Not Found");
        }else{
            res.json({
                tutorial:result
            });
        }
    });
    
   }catch(error){
    res.status(400).send(error.message);
   }
    
}
exports.findTutorial=async(req, res)=>{
    try{
        let id=req.params.id;
        //res.send(id)
        const tutorial=await Tutorial.findById(id).then(tutorial => {
            if(tutorial==null){
                res.send("Tutorial Not Found");
            }else{
                res.json({
                    tutorial:tutorial
                });
            }
            
        });
    }catch(error){
        res.status(400).send(error.message);
    }
}
exports.findByTitleTutorial=async(req, res)=>{
    try{
        let title=req.params.title;
        //res.send(id)
        var sorting=req.query.sorting;
        if (sorting=="asc") {
            sorting=1;    
        }else{
            sorting=-1;
        }
        var field=req.query.at;
        if (field=="createdAt"){
            field={"createdAt":sorting}
        }else{
            field={"updatedAt":sorting}
        }
        const tutorial=await Tutorial.find({title:title}).sort(field).then(tutorial => {
            if(tutorial==null){
                res.send("Tutorial Not Found");
            }else{
                res.json({
                    tutorial:tutorial
                });
            }
            
        });
    }catch(error){
        res.status(400).send(error.message);
    }
}