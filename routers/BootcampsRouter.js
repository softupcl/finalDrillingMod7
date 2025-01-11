const express = require('express');
const { BootcampsController } = require('../controllers');

const router = express.Router();

router.get("/", BootcampsController.findAll);
router.get("/:id", BootcampsController.findBootcampById);
router.post("/", BootcampsController.createBootcamp);
router.put("/:id", BootcampsController.updateBootcampById);
router.delete("/:id", BootcampsController.deleteBootcampById);
router.post("/userBootcamp", BootcampsController.createUserBootcamp);

module.exports = {
    BootcampsRouter : router
}
