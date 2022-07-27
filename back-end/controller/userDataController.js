const userData = require("../modal/userDataModal");
const fs = require('fs');
const update = require('../multer/multer')

// get user data
const getUserData = async (req, res) => {
  const userInformation = await userData.find({ user: req.user.id });
  res.status(200).json(userInformation);
};

// post user data
const postUserData = async  (req, res) => {
  update(req,res, (err)=> {
    if(err){
      console.log(err);
    }else{ 
      const newImage = new userData({
        text:req.body.text,
        image:{
          data:fs.readFileSync ("uploads/" + req.file.filename),
          contentType:"image/png",
        },
        user: req.user.id,
      });
      newImage.save()
      .then(()=> res.send("succcess")).catch((err)=> console.log(err))
    }
   })
};

// update user data
const updateUserData = async (req, res) => {
    const updateUserData = await userData.findById(req.params.id)
  
    if (!updateUserData) {
      res.status(400).json({
        message:'user data not found'
      })
    }
    if (!req.user) {
      res.status(404).json({
        message:'user not found'
      })
    }
    if (updateUserData.user.toString() !== req.user.id) {
      res.status(401).json({
        message:'User not authorized'
      })
    }
    const updatedData = await userData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedData)
  }

// delete user data
const deleteUserData = async (req, res) => {
    const userDataDelete = await userData.findById(req.params.id)
  
    if (!userDataDelete) {
      res.status(400).json({
        message:"user data not found "
      })
    }
  
    if (!req.user) {
      res.status(401).json({
        message:"user not found"
      })
    }
  
    if (userDataDelete.user.toString() !== req.user.id) {
      res.status(401).json({
        message:"user not found or something went wrong or unauthorized"
      })
    }
  
    await userDataDelete.remove()
  
    res.status(200).json({ 
        message:'user data deleted successfully'
    })
  }
  

module.exports = {
  getUserData,
  postUserData,
  updateUserData,
  deleteUserData,
};