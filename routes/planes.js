const express = require('express');
const router = express.Router();
const path = require('path');


// @des Получить все самолеты
router.get('/', (req,res) => {
    res.send('Get all planes')
})

// @des Получить самолёт по id
router.get('/:id', (req,res) => {
    res.send('Get single plane')
})

// @des Создать самолёт по id
router.post('/:id', (req,res) => {
    res.send('Create plane')
})


module.exports = router;
