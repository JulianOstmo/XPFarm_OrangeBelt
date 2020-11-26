const { FIXTURE_MESSAGE, FIXTURE_CAT } = require('./fixtures/strings');
const { message, cat } = require('../index');

test(`message tests are hooked up`, () => {
  expect(message).toBe(FIXTURE_MESSAGE);
});

test(`cat tests are hooked up!`, () => {
  expect(cat()).toBe(FIXTURE_CAT);
});
