import express from 'express'
import mongoose from'mongoose'
import ejs from 'ejs'
import multer from 'multer'
import path from 'path'
import morgan from 'morgan'
// import User from './models'


// Set The Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./public/uploads/')},
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('avater');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('uploadFile'));

app.post('/uploads', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('uploadFile', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('uploadFile', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('uploadFile', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true }))
app.use(express.json())

// schema part
let Schema = mongoose.Schema
let testSchema = new Schema({
    name : String
})

let Test = mongoose.model('Test' , testSchema)

app.get('/about', (req,res)=>{
       let test = new Test({
        name : 'Iftakher'
    })
    test.save()
        .then( t=>{
        res.json(t)
        })
        .catch(e =>{
        console.log(e)
        res.status(500).json({
            error : 'Error occure'
        })
    })
})
// connection 
const PORT = process.env.PORT||3000
mongoose.connect(`mongodb://127.0.0.1:27017`, {
    useNewUrlParser:true, useUnifiedTopology:true
    })
.then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
})
.catch(e =>{
    console.log(e)
})


