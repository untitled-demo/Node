const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const SchoolAdmin = mongoose.model("SchoolAdmins",new mongoose.Schema({
    EmailID:{
        type:String,
        maxlength:30,
        required:true,
        trim:true,
        unique:true,
        index:true
    },
    FirstName:{
        type:String,
        minlength:5,
        maxlength:60,
        required:true
    },
    LastName:{
        type:String,
        minlength:5,
        maxlength:60,
        required:true
    },
    Password:{
        type:String,
        minlength:8,
        maxlength:32,
        required:true
    },
    MobileNumber:{
        type:String,
        match:/^[0-9]{10}$/,
        required:true
    },
    Address:{
        type:String,
        minlength:10,
        maxlength:30,
        required:true
    },
    IsActive:{
        type:Boolean,
        required:true
    },
    SchoolID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Schools',
        required:true
    },
    SuperUserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SuperUsers',
        required:true
    }

}));


function validateSchoolAdmin(schooladmin){
    const schema = Joi.object({
        EmailID: Joi.string().trim().max(30).email().required(),
        FirstName: Joi.string().trim().min(5).max(60).required(),
        LastName: Joi.string().trim().min(5).max(60).required(),
        Password: Joi.string().trim().min(8).max(32).alphanum().required(),
        MobileNumber: Joi.string().trim().regex(/^[0-9]{10}$/).required(),
        Address: Joi.string().trim().min(10).max(300).required(),
        IsActive: Joi.bool().required(),
        SchoolID: Joi.string().trim().required(),
        SuperUserID: Joi.string().trim().required()
    });

    return schema.validate(schooladmin);
    
}

module.exports.SchoolAdmin = SchoolAdmin;
module.exports.validate = validateSchoolAdmin;