const express = require('express');
const router = express.Router();
const { createDiscussion, getDiscussions } = require('../controllers/discussionController');

router.post('/', createDiscussion);
router.get('/', getDiscussions);

module.exports = router;