const mongoose = require('mongoose')

const TaskSchema =  new mongoose.Schema({
    title:{type :String , required:true },
    duration :{type:Number , required :true},
    date:{type:Date , default: Date.now },
    order : {type:Number , default : 0} 
});

module.exports = mongoose.model("task" , TaskSchema)