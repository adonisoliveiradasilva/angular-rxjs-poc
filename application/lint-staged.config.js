module.exports = {
  '*.{ts,js}': [
    'eslint --fix',
    'prettier --write'
  ].map(cmd => `cd application && npx ${cmd}`),
  '*.html': [
    'prettier --write'
  ].map(cmd => `cd application && npx ${cmd}`),
  '*.scss': [
    'prettier --write'
  ].map(cmd => `cd application && npx ${cmd}`),
  '*.json': [
    'prettier --write'
  ].map(cmd => `cd application && npx ${cmd}`)
};
