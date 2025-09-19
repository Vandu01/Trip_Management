const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017`)

//create schema(userinfo)
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email:String,
})
//mongoose.model("user",userSchema);//creats users in mdb
//export model to work in rout , export is a propertt not a method
module.exports= mongoose.model("user",userSchema);