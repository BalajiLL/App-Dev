const mongoose = require('mongoose');
const db = ()=>{
    mongoose.connect("mongodb://localhost:27017/E-Share")
    .then(()=>{ console.log(`MongoDB connected successfully`) })
    .catch(error =>{ console.log( error.message )});
}
module.exports = { db };