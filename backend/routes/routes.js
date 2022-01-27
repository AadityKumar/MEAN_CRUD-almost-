const express=require('express')
const router=express.Router();
const ObjectId = require('mongoose').Types.ObjectId

const Employee=require('../models/employee.js')

// Base path:http://localhost:3000/employees
router.get('/',(req,res)=>{
    Employee.find((err,doc)=>{
        if(err){
            console.log('Error in get data'+err)
        }else{
            res.send(doc);
        }
    })
})

// put api
router.put('/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log('Error in UpdateEmployee'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('No record found with id:'+req.params.id)
    }
    })


// delete single api
router.delete('/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
        
        let emp={
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        }

        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(err){
                console.log('Error in Delete Employee'+err)
            }else{
                res.send(doc);
            }
        })
    }else{
        return res.status(400).send('No record found with id:'+req.params.id)
    }
    })


router.post('/',(req,res)=>{
    let emp=new Employee({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    emp.save((err,doc)=>{
        if(err){
            console.log('Error in post data'+err)
        }else{
            res.send(doc);
        }
    })
})

module.exports=router;

