const db = require('../models');
const {Bootcamp, UserBootcamp, User} = db;

const BootcampsController = {}

BootcampsController.createBootcamp = async (req,res,next)=>{
   
    const data = req.body;

    try {

    const bootcamp = await Bootcamp.create(data);
    res.json({bootcamp});
        
    } catch (err) {
        console.log(err);
        if(err?.name.includes('ValidationError')) {
            const { errors } = err
            const errorMessages = errors.map(({ path, message }) => ( { [path]: message } ))
      
            return res.status(400).json(errorMessages)
          }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

BootcampsController.findBootcampById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const bootcamp = await Bootcamp.findByPk(id, {include: User});
        if(!bootcamp){
            return res.status(404).json({ message: 'Bootcamp no encontrado' })
        }
        res.json(bootcamp);
    } catch (err) {
        console.log(err);
        if(err?.name.includes('ValidationError')) {
            const { errors } = err
            const errorMessages = errors.map(({ path, message }) => ( { [path]: message } ))
      
            return res.status(400).json(errorMessages)
          }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

BootcampsController.findAll = async(req,res,next)=>{
    try {
        const bootcamps = await Bootcamp.findAll({include: User});
        if(!bootcamps){
            return res.status(404).json({ message: 'No hay bootcamps disponibles' })
        }
        res.json(bootcamps);
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}


BootcampsController.updateBootcampById = async(req,res,next)=>{
    const data = req.body
    const {id} = req.params;

    try {
        const bootcamp = await Bootcamp.update(data, { where: { id }, individualHooks: true });
        res.json(bootcamp);
        
    } catch (err) {
        console.log(err);
        if(err?.name.includes('ValidationError')) {
            const { errors } = err
            const errorMessages = errors.map(({ path, message }) => ( { [path]: message } ))
      
            return res.status(400).json(errorMessages)
          }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

BootcampsController.deleteBootcampById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const bootcamp = await Bootcamp.destroy({ where: { id } });
        res.json({message: 'Bootcamp eliminado correctamente'});
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

BootcampsController.createUserBootcamp = async (req,res,next)=>{
   
    const data = req.body;

    try {

    const userBootcamp = await UserBootcamp.create(data);
    res.json({userBootcamp});
        
    } catch (err) {
        console.log(err);
        if(err?.name.includes('ValidationError')) {
            const { errors } = err
            const errorMessages = errors.map(({ path, message }) => ( { [path]: message } ))
      
            return res.status(400).json(errorMessages)
          }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}



module.exports = {
    BootcampsController: BootcampsController
}

