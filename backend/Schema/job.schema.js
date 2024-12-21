const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
     companyName:{
        type:String,
        required:true,
     },
     logoUrl:{
        type:String,
        required:true,
     },
     jobPosition:{
        type:String,
        required:true,
     },
     salary:{
        type:Number,
        required:true,
     },
     jobType:{
        type:String,
        required:true,
        enum:["full-time","part-time","contractor","internship",'freelancer'],
     },
     remote:{
         type:String,
         required:true,
         enum:["Home","Office","Hybrid"],
     },
     location:{
      type:String,
      required:true,
     },
     aboutCompany:{
      type:String,
     },
     skills: {
      type: Array,
      required: true,
      },
     user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
     }
})

const jobModel = mongoose.model("job",jobSchema)

module.exports = jobModel