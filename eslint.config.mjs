// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'ts/no-require-imports': 'off',
    'ts/no-explicit-any': 'error',
  },
})
