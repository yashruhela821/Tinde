const express = require('express');

const app = express();

app.use("/test+/tt", (req,res )=>{
    res.send("tt page hai ye ")
});
app.use("/tes?t", (req,res )=>{
    res.send("test page hai ye ")
});

app.use("/ho*me",(req,res)=>{
    res.send("home home home  !!")
});
app.use("/gola/:userid/:name/:AGE",(req,res)=>{
    console.log(req.params);
    res.send("hanji")
});
app.listen(9999, ()=>{
    console.log("server sunn rha hai!!")
});
  