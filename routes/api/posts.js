const express = require('express');
const router = express.Router();

//@route Get api/users/test
//@desc  Tests users route
//access Public
router.get('/test', (req, res) => res.json({msg:'Post-page-is-alive'}));

module.exports = router;