
const SkillModel = require('../models/skill')

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};

function index(req, res) {
  res.render('skills/index', {skills: SkillModel.getAll()});
}

function show(req, res) {
  console.log(req.params, " <- req.params")

  res.render('skills/show', {skill: SkillModel.getOne(req.params.id)})
}

function newSkill(req, res) {
  res.render('skills/new')
}
function create(req, res) {
  SkillModel.create(req.body);
  res.redirect('/skills')
};

function deleteSkill(req, res) {
  console.log(req.body);
  SkillModel.deleteOne(req.params.id)
  res.redirect('/skills')
}