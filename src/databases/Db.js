const mongoose = require ('mongoose');

const dbconnect = async ()=>{
    await mongoose.connect();

};
module.exports = dbconnect;
