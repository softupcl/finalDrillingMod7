const db = require('../models');
const {Bootcamp} = db;

const BootcampsController = {}

BootcampsController.createBootcamp = async (req,res,next)=>{
   
    const data = req.body;

    try {

    // if(!data?.email){
    //     return res.status(400).json({ message: 'El correo es requerido' })
    // }

    // const userExists = await User.findOne({ where: { email: data?.email } })
    // if(userExists) {
    //   return res.status(409).json({ message: 'Usuario con correo ya existente' })
    // }

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
        const bootcamp = await Bootcamp.findByPk(id);
        if(!bootcamp){
            return res.status(404).json({ message: 'Bootcamp no encontrado' })
        }
        res.json(bootcamp);
    } catch (err) {
        console.log(err);
        // if(err?.name.includes('ValidationError')) {
        //     const { errors } = err
        //     const errorMessages = errors.map(({ path, message }) => ( { [path]: message } ))
      
        //     return res.status(400).json(errorMessages)
        //   }
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}

BootcampsController.findAll = async(req,res,next)=>{
    try {
        const bootcamps = await Bootcamp.findAll();
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

BootcampsController.deleteBootcampById = async(req,res,next)=>{}


module.exports = {
    BootcampsController: BootcampsController
}