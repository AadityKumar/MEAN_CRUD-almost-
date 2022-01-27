const mongoose=require('mongoose')

const Employee=mongoose.model('Employee',{
    name:{type:String},
    email:{type:String},
    address:{type:String}
});
module.exports=Employee;