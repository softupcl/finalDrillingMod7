const express = require('express');
const { UsersController } = require('../controllers');

const router = express.Router();


router.get("/", UsersController.findAll);
router.get("/:id", UsersController.findUserById);
//router.get("/:id/bootcamps", UsersController.findUserBootcampsById);
router.post("/", UsersController.createUser);
router.put("/:id", UsersController.updateUserById);
router.delete("/:id", UsersController.deleteUserById);

module.exports = {
    UsersRouter : router
}