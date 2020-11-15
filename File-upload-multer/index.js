const express = require ('express')
const multer = require ('multer')
const ejs = require ('ejs')
const path = require ('path')
// Init app
const app =express()

// Set storage engine
const storage = multer.diskStorage({
    destination : './public/uploads/',
    filename : (req,file ,cb)=>{
    cb(null, file.fieldname + '-' + Date.now()
     + path.extname(file.originalname))
}
})

// Init upload
const upload = multer({
    storage: storage,
    limits : {
        fileSize : 1024*1024*5
    },
    fileFilter: (req, file, cb)=>{
        // check file type
        const filetypes= /jpeg|jpg|png|gif/
        // check ext
        const extName = filetypes.test(path.extname(file.orginalname).toLoewrCase())
        // check mime type
        const mimeType = filetypes.test(file.mimetype)
        if(extName && mimeType){
           return cb(null,true)
        }else{
            cb(new Error('Only Support Image'))
        }
    }
}).single('avater')


// EJS
app.set('view engine', 'ejs')

//Public folder
app.use(express.static('./public'))

app.get('/', (req,res)=> res.render('index'))

app.post('/upload' , (req,res)=>{
    upload(req,res, (err)=>{
        if(err){
            res.render('index', {
                msg : err
            })
        }else{
            console.log(req.file)
            res.send('test')
        }
    })
})
const port = 3000
app.listen(port, ()=>{
    console.log(` Server started on ${port}`)
})