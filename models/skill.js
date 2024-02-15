const skills = [
  {id: 123, skill: 'Time Management', done: true},
  {id: 124, skill: 'Accountability', done: true},
  {id: 125, skill: 'Patience', done: false}
];

module.exports = {
  getAll,
  getOne,
  create
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);

  return skills.find(skill => skill.id === id)
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill)
}