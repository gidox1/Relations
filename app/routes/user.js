'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.post('/create', (req, res) => UserController.create(req, res));
router.get('/', (req, res) => UserController.getUsers(req, res));

module.exports = router;