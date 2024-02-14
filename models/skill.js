const skills = [
  {id: 123, skill: 'Time Management', done: true},
  {id: 124, skill: 'Accountability', done: true},
  {id: 125, skill: 'Patience', done: false}
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);

  return skills.find(skill => skill.id === id)
}