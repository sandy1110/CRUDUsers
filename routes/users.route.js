'use strict'
const express = require('express');
const usersController = require('../controllers/users.controller')

const api = express.Router();

api.get("/", usersController.getUsers);
module.exports = api;