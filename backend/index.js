const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express(); // for express server
const mongoose=require('./db.js');
const routes=require('./routes/routes.js')

app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:4200'}))

app.listen(1230,()=> console.log('server started at port:3450'))

app.use('/employees',routes);