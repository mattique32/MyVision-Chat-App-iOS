module.exports = {
  '*.ts': ['eslint --fix', 'prettier --write'],
  '*.tsx': ['eslint --fix', 'prettier --write'],
  '*.js': ['eslint --fix', 'prettier --write'],
  '*.jsx': ['eslint --fix', 'prettier --write'],
  '*.json': ['prettier --write'],
  '*.md': ['prettier --write']
}
