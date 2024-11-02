const express = require('express');

const app = express();

app.use("/route",[(req,res,next)=>{
    console.log("first");
    next();
    // res.send("first handler");
    
},
(req,res,next)=>{
    console.log("second");
         res.send("second handler");
    next();



}]
);
app.listen(9999, ()=>{
    console.log("server sunn rha hai!!")
});
  