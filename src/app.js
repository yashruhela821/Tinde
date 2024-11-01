const express = require('express');

const app = express();

app.use("/test", (req,res )=>{
    res.send("test page hai ye ")
});
app.use("/home",(req,res)=>{
    res.send("home home home  !!")
})
app.listen(9999, ()=>{
    console.log("server sunn rha hai!!")
});
  