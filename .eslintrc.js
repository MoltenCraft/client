module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue-i18n/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue-i18n/no-html-messages': 'error',
    'vue-i18n/no-dynamic-keys': 'error',
    'vue-i18n/no-unused-keys': ['error', {
      extensions: ['.json', '.vue']
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  settings: {
    'vue-i18n': {
      localeDir: './lang/*.json'
    }
  }
}
