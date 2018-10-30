var projectproposal=require('./schema.js');
var mongoose = require('mongoose');
module.exports={
    create:(req,res)=>{
        if(!req.body.location || !req.body.category || !req.body.projectTitle || !req.body.capitalCost
            || !req.body.recurringCost || !req.body.expectedDeliverables || !req.body.descriptionOfProject
            || !req.body.contactPerson || !req.body.telephoneNo ){
                return res.send({message:"Please fill all fields",statusCode:404})
            }
        projectproposal.create(req.body)
        .then(success=> res.send({message:"Created profile", statusCode:200, result:success}))
        .catch(unsuccess=> res.send({message:"ERROR in creation",statusCode:400,error:unsuccess}))
    },
    fetchOne:(req,res)=>{
        if(!req.body._id){
            return res.send({message:"Please fill Id",statusCode:404})
        }
        projectproposal.find({
            _id:req.body._id
        })
        .then(success=> res.send({message:"Data found", statusCode:200, result:success}))
        .catch(unsuccess=> res.send({message:"ERROR in fetched", statusCode:400, error:unsuccess}))
    },
    fetchAll:(req,res)=>{
        projectproposal.find()
        .then(success=> res.send({message:"Data found", statusCode:200, result:success}))
        .catch(unsuccess=> res.send({message:"ERROR in fetched", statusCode:400, error:unsuccess}))
    }
}
