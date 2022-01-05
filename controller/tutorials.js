const express = require('express');
const Tutorial = require("../models/tutorials");
const routes = require("../models/tutorials");
const validator=require("../helper/joischemas");


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
        if(tutorial==null || tutorial==""){
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
exports.postTutorial = async(req, res,next) => {
   try{
        const resultvalidated= await validator.swaggerschemasPOST.validateAsync(req.body)
        // console.log(result.body);
        let tutorial =new Tutorial(resultvalidated);
        tutorial.save().then((results)=>{
            res.status(200).json({
                result:results
            });
        })
   }catch(error){
        res.status(422).json(error.message);
   }
};
exports.putTutorial=async(req,res)=>{
    try{
       let id = req.params.id.match(/^[0-9a-fA-F]{24}$/);
       if (id==null){
            throw new Error("check your id");
       }else{
            const resultBody= await validator.swaggerschemasPUT.validateAsync(req.body);
            const tutorial =await Tutorial.findByIdAndUpdate(id,{
                title:resultBody.title,
                description:resultBody.description,
                published:resultBody.published
            },{new:true}).then((result)=>{
                if(result==null || result==""){
                    res.send("Tutorial Not Found");
                }else{
                    res.json({
                      result
                    });
                }
            });    
       }
         
    }catch(error){
        if(error.isJoi){
            res.status(422).send(error.message);
        }else{
            res.status(422).send(error.message);
        }
        
    }
    

};
exports.deleteTutorial=(req,res)=>{
   try{
    let id = req.params.id.match(/^[0-9a-fA-F]{24}$/);
    if (id==null){
         throw new Error("check your id");
    }
    const tutorial = Tutorial.findByIdAndRemove(id).then((result)=>{
        if(result==null || result==""){
            res.send("Tutorial Not Found");
        }else{
            res.json({
                result
            });
        }
    });
    
   }catch(error){
    res.status(422).send(error.message);
   }
    
}
exports.findTutorial=async(req, res)=>{
    try{
        let id = req.params.id.match(/^[0-9a-fA-F]{24}$/);
       if (id==null){
            throw new Error("check your id");
       }
        //res.send(id)
        const tutorial=await Tutorial.findById(id).then(tutorial => {
            if(tutorial==null || tutorial=="" ){
                res.send("Tutorial Not Found");
            }else{
                res.json({
                   tutorial
                });
            }
            
        });
    }catch(error){
        res.status(422).send(error.message);
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
            if(tutorial==null || tutorial==""){
                res.send("Tutorial Not Found");
            }else{
                res.json({
                    tutorial
                });
            }
            // console.log();
            
        });
    }catch(error){
        res.status(422).send(error.message);
    }
}