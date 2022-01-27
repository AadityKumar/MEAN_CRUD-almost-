const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://avenger:m86Ycrc7BSeFnCU@cluster0.igb3o.mongodb.net/tutorial?retryWrites=true&w=majority',
{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
  console.warn("connected")
})
module.exports=mongoose;