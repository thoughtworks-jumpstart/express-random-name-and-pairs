module.exports.names = [
  'Jenssen',
  'Kai',
  'Shalini',
  'Gaurav',
  'Eddie',
  'Natalie',
  'John',
  'Brandon',
  'Dennis',
  'JinJia',
];

module.exports.getRandomName = names => {
  return names
    .map(name => ({
      name,
      weight: Math.random(),
    }))
    .sort((a, b) => a.weight - b.weight)
    .map(nameObj => nameObj.name);
};
