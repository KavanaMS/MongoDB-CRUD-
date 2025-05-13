const express = require('express')
const app = express()
const userModel = require('./usermodel')
app.get('/', (req,res)=>{
    res.send("Hey")
})

app.get('/create', async(req,res)=>{
    const createdUser = await userModel.create({
        name: "Kavana",
        username: "Kavana-24",
        email: "kavana@123"
    })
    res.send(createdUser)
})

app.get('/read', async(req,res)=>{
    const readUser = await userModel.find()
    res.send(readUser)
})

app.get('/update', async(req,res)=>{
    const updatedUser = await userModel.findOneAndUpdate({
        username: "Kavana-24",
        name: "Happy",
    })
    res.send(updatedUser)
})

app.get('/delete', async(req,res)=>{
    const deletedUser = await userModel.findOneAndDelete({
        username: "Kavana-24"
    })
    res.send(deletedUser)
})

app.listen(3000)