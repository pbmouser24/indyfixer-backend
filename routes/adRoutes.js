const express = require("express");
const Ad = require("./models/ad");

const router = express.Router();

// Get list of all ads in the database
router.get("/ads", async(req,res) =>{
    try{
       const ads = await Ad.find({})
       res.send(ads)
       console.log(ads)
    }
    catch (err){
       console.log(err)
       res.status(400).send(err)
    }
 
 })
 
 //Grab a single ad in the database
 router.get("/ads/:id", async (req,res) =>{
    try{
       const ad = await Ad.findById(req.params.id)
       res.json(ad)
    }
    catch (err){
       res.status(400).send(err)
    }
 })
 
 //added an ad to the database
 router.post("/ads", async(req,res) =>{
    try{
       const ad = await new Ad(req.body)
       await ad.save()
       res.status(201).json(ad)
       console.log(ad)
    }
    catch(err){
       res.status(400).send(err)
 
    }
       
    
 })
 
 //update is to update an existing record/resource/database entry..it uses a put request
 router.put("/ads/:id", async(req,res) =>{
    //first we need to find and update the ad the front end wants us to update.
    //to do this we need to request the id of the ad from request
    //and the find it in the database and update it
    try{
       const ad = req.body
       await Ad.updateOne({_id: req.params.id},ad)
       console.log(ad)
       res.sendStatus(204)
    }
    catch(err){
       res.status(400).send(err)
    }
 })
 
 router.delete("/ads/:id", async(req,res) =>{
    //method or function in mongoose/mongo to delete a single instance of a ad or object 
    try{
       const ad = await Ad.findById(req.params.id)
       console.log(ad)
       await Ad.deleteOne({ _id: ad._id })
       res.sendStatus(204)
    }
    catch(err){
       res.status(400).send(err)
    }
 })

 module.exports = router;