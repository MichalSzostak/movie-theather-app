const express = require("express");
const router = express.Router();
const { User } = require("../models/index");

const usersRouter = require('./users-router');
const showsRouter = require('./shows-router');


router.use('/users/', usersRouter);
router.use('/shows/', showsRouter);

module.exports = router;