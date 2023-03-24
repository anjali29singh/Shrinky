const mongoose =require('mongoose')
const shortId= require('shortid')


const shortUrlSchema = new mongoose.Schema({
    fullUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true,
        default:shortId.generate
    }

})
module.exports = mongoose.model('ShrinkUrl',shortUrlSchema)