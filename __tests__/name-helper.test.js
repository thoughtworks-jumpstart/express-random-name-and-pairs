const NameHelper = require('../src/name-helper');

describe('NameHelper', () => {
  it('should return all names once', () => {
    const personA = 'John';
    const personB = 'Peter';
    const personC = 'Alice';

    const randomNames = NameHelper.getRandomName([personA, personB, personC]);

    expect(randomNames).toHaveLength(3);
    expect(randomNames.includes(personA)).toBeTruthy();
    expect(randomNames.includes(personB)).toBeTruthy();
    expect(randomNames.includes(personC)).toBeTruthy();
  });
});
