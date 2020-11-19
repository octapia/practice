const express = require ('express')
const multer = require ('multer')
const ejs = require ('ejs')
const path = require ('path')
const morgan = require ('morgan')

// Init app
const app =express()

// EJS
app.set('view engine', 'ejs')

//Public folder
app.use([
    // express.static('public'),
    morgan('dev')
])
// Set storage engine
const storage = multer.diskStorage({
    // set file name
      destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        file.originalname // car.jpg // car-45124578.jpg
        fileName = path.parse(file.originalname);
        fileName = `${fileName.name}-${Date.now()}-${fileName.ext}`      
        cb(null, fileName)
    }
  })

// Init upload
const upload = multer({
    storage
})

app.get('/', (req,res)=> res.render('index'))

app.post('/upload', upload.single('avater'), (req,res)=>{
    res.send('file received')

})
const port = 3000
app.listen(port, ()=>{
    console.log(` Server started on ${port}`)
})
