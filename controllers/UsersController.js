const db = require('../models');
const {User} = db;

const UsersController = {}

UsersController.createUser = async (req,res,next)=>{
    const {firstName, lastName, email} = req.body;
    try {

    // if(!data?.email){
    //     return res.status(400).json({ message: 'El correo es requerido' })
    // }

    // const userExists = await User.findOne({ where: { email: data?.email } })
    // if(userExists) {
    //   return res.status(409).json({ message: 'Usuario con correo ya existente' })
    // }

    const user = await User.create(firstName, lastName, email);
    res.json({user});
        
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

UsersController.findUserById = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        res.json(user);
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

UsersController.findAll = async(req,res,next)=>{
    try {
        const users = await User.findAll();
        if(!users){
            return res.status(404).json({ message: 'No hay usuarios' })
        }
        res.json(users);
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}


UsersController.updateUserById = async(req,res,next)=>{
    const data = req.body
    const {id} = req.params;

    try {
        const user = await User.update(data, { where: { id }, individualHooks: true });
        res.json(user);
        
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

UsersController.deleteUserById = async(req,res,next)=>{}


module.exports = {
    UsersController
}