module.exports = {
  "*.{ts,js}": ["npx eslint --fix", "npx prettier --write"],
  "*.html": ["npx prettier --write"],
  "*.scss": ["npx prettier --write"],
  "*.json": ["npx prettier --write"]
};
