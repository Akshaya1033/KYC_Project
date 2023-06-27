const path= require('path')
const express= require('express')

const app =express()

const mongoos = require('mongoose')

/*app.get('/',(req,res)=>{
    res.json({
        name :"Akshaya"
    })
})

app.get('/about',(req,res)=>{
    res.send({
     name :'Akshitha'   
    })
}) */

app.use(express.static('public'))


app.get('/',(req,res)=>{
    console.log(path.resolve(__dirname,'index.html'))
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about',(req,res)=>{
    console.log(path.resolve(__dirname,'about.html'))
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact',(req,res)=>{
    console.log(path.resolve(__dirname,'contact.html'))
    res.sendFile(path.resolve(__dirname,'contact.html'))
})

app.listen(3000,()=>{
console.log('App listening on port 3000')
});