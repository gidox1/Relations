'use strict';

const express = require('express');
const router = express.Router();
const FamilyController = require('../controller/family');

router.post('/', (req, res) => FamilyController.create(req, res));
router.get('/:id', (req, res) => FamilyController.getFamily(req, res));

module.exports = router;