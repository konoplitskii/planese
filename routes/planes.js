const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const {getPlanes,createPlane,getPlane} = require('../controllers/plane')

//Показываем, где хранить загружаемые картинки
const storage = multer.diskStorage({
    destination:'./assets/',
    filename:(req,file,cb) => {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage});

// @des Получить все самолеты
router.get('/', getPlanes)

// @des Получить самолёт по id
router.get('/:id', getPlane)

// @des Создать самолёт по id
router.post('/',upload.single('planeImg'),createPlane)


module.exports = router;
