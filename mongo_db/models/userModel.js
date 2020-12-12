const userFactory = ({ username, age }) => ({
  username,
  age,
  languages: [
    'PHP',
    'JS',
    'Ruby',
    'Bash'
  ],
  technologies: [
    'Frontend',
    'Backend',
    'DB',
    'DevOps'
  ]
});

module.exports = {
  userFactory
};
