const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req,res,cb) =>{
        cb(null,file.fieldname + '-' + Date.now() + file.orginalname)
    }
})

const upload = multer({
    storage,
    limits :{
        fileSize: 1024*1024*5
    },
    fileFilter:(req,file,cb) =>{
        const types = /jpeg|jpg|png|gif/
        const extName = types.test(path.extname(file.orginalname).toLowerCase())
        const mimeType = types.test(file.mimetype)
   if(extName && mimeType){
        cb(null,true)
   }else{
      cb( new Error(' Only supported Images'))
   }
 }
})

module.exports = upload