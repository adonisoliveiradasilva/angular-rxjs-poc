module.exports = {
  '*.{ts,js}': ['npx eslint --fix', 'npx prettier --write'],
  '*.{html,scss,json}': ['npx prettier --write']
};
