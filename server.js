const dotenv = require("dotenv")
dotenv.config();

const express = require('express')
const mongoose =require('mongoose')
const cors =require('cors')


const urlCollection=require('./db/shrinkUrl')
const app =express()

mongoose.connect(process.env.MONGO_CONN,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.render('index')

})

app.post('/shrinkUrls',async (req,res)=>{
   const urls= await urlCollection.findOne({fullUrl:req.body.fullUrl});
   if(urls===null || urls===undefined) {
    const shrinkUrl = await urlCollection.create({fullUrl:req.body.fullUrl})
    res.json({shortUrl:shrinkUrl.shortUrl})
   }
   else{
    res.json({shortUrl:urls.shortUrl})
   }
})

app.get('/:shrinkUrl',async (req,res)=>{
    const shrinkUrl= await urlCollection.findOne({shortUrl:req.params.shrinkUrl})
    if(shrinkUrl=== null){ 
        return res.status(404).send('Bad Request');
    }
    res.redirect(shrinkUrl.fullUrl)
})

app.listen(5000)