'use strict';

const express = require('express');
const router = express.Router();
const TagsController = require('../controller/tag');

router.get('/', (req, res) => TagsController.getTags(req, res));

module.exports = router;