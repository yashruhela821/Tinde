const express = require('express');
const dbconnect = require('./databases/Db');

const User = require('./models/user');
const app = express();

app.post("/signup",async (req,res)=>{
    const user = new User({
        firstName:"yash",
        lastName:"ruhela",
        emailId:"yashruhela1053",
        password:"jjafaldakd",
    })
    try{
        await user.save();
        res.send("user added");
    }catch(err){
        res.status(400).send("error in saving the user");
    }
     
});


dbconnect()
.then(
    ()=>{
        console.log("db conected");
        app.listen(9999, ()=>{
            console.log("server sunn rha hai!!")
        });
    }
)
.catch((err)=>{
    console.log("error occured kuch toh");
})


