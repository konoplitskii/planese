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
        res.status(500).json({message:"Не удалось получить запрашиваемый самолёт, повторите попытку"})
    }
}


module.exports = {
    getPlanes,
    createPlane,
    getPlane
}