const express = require ('express')

const app =express()

const fileupload = require ('express-fileupload')
app.use(fileupload())

app.get("/",(req,res,next)=>{
    res.status(200).send("Hello world")
})

app.post("/uploads",(req,res,next)=>{
    const file =req.files.photo
    file.mv("./uploads/" + file.name,(err,result)=>{
        if(err)
        throw err

    res.send({
        success: true,
        message : "File uploaded"
    });
})
})
app.listen(3000, ()=>{
    console.log("started on port 3000")
})