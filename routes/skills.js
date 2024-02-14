 const express = require('express');
 const router = express.Router();

 // Require the controller that exports Skill CRUD functions
 const skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

 // GET /skills
 router.get('/', skillsCtrl.index);

 router.get('/:id', skillsCtrl.show);
module.exports = router;
