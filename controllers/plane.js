const Plane = require('../models/plane')

const getPlanes = async (req,res) => {
    try{
       const planes = await Plane.find();
       res.status(200).json(planes);
    }catch (e) {
        res.status(500).json({message:"Не удалось получить список самолётов, повторите попытку"})
    }
}

const createPlane = async (req,res) => {
    const errors = {};

    if(!req.body.name) {
        errors.name = {message:"Пожалуйста укажите название"}
    }
    if(!req.body.price) {
        errors.price = {message:"Пожалуйста укажите цену"}
    }
    if(!req.body.description) {
        errors.description = {message:"Пожалуйста укажите описание"}
    }
    if(req.body.description && req.body.description.length > 1300) {
        errors.description = {message:"Слишком длинное описание"}
    }
    if(!req.body.capacity) {
        errors.description = {message:"Пожалуйста укажите вместимость"}
    }

    if(!req.file) {
        errors.planeImg = {message:"Пожалуйста загрузите фото"}
    }


    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors)
    }

    try{
        const {name,price,description,capacity} = req.body
        const plane = await Plane.create({
            name,
            price,
            description,
            capacity,
            planeImg:`http://localhost:3131/static/${req.file.filename}`,
        })
        res.status(201).json(plane);
    }catch (e) {
        res.status(500).json({message:"Не удалось создать самолёт"})
    }
}

const getPlane = async (req,res) => {
    try{
        const plane = await Plane.findById(req.params.id);
        res.status(200).json(plane);
    }catch (e) {
        res.status(400).json({message:"Не удалось получить запрашиваемый самолёт, повторите попытку"})
    }
}


module.exports = {
    getPlanes,
    createPlane,
    getPlane
}