const details = require('../models/detailsModel')



// add details
exports.addUserController = async (req,res)=>{
  
    console.log("Inside detailsController");
    const { firstName,LastName, email,password, phonenumber} = req.body
    console.log(firstName,LastName, email,password, phonenumber);
try{
    const newDetails = new details({
        firstName,LastName, email,password, phonenumber
                })
                await newDetails.save()
                res.status(200).json(newDetails)
}catch(err){
    res.status(401).json(err)
}


   
    }