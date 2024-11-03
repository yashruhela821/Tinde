const mongoose = require ('mongoose');

const dbconnect = async ()=>{
    await mongoose.connect("mongodb+srv://yashruhela:cY4tODhJLZ9r5hQ6@cluster0.hlqfw.mongodb.net/Tindecompasss");

};
module.exports = dbconnect;