const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let projectproposal = new Schema({
	location:{type:String},
	category:{type:String},
	projectTitle: {type:String},
    capitalCost:{type:String},
    recurringCost:{type:String},
    expectedDeliverables:{type:String},
    descriptionOfProject:{type:String},
    contactPerson:{type:String},
    telephoneNo:{type:String},
    status:{type:String},
})

module.exports = mongoose.model('projectproposal', projectproposal);


