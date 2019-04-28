module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  globals: {},

  /**
   * 规则继承
   */
  extends: [
    'airbnb-base',
  ],

  /**
   * 规则共享参数
   */
  settings: {
    'import/resolver': {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'static': resolve('static')
      },
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    }
  },

  /**
  * 针对特定文件的配置
  * 【】可以通过overrides对特定文件进行特定的eslint检测
  * 【】特定文件的路径书写使用Glob格式，一个类似正则的路径规则，可以匹配不同的文件
  * 【】配置几乎与 ESLint 的其他配置相同。覆盖块可以包含常规配置中的除了 extends、overrides 和 root 之外的其他任何有效配置选项，
  */
  overrides: [
    {
      'files': ['bin/*.js', 'lib/*.js'],
      'excludedFiles': '*.test.js',
      'rules': {
        'quotes': [2, 'single']
      }
    }
  ],
  /**
    * 自定义规则
    * http://eslint.cn/docs/user-guide/configuring#configuring-rules
    * 【】基本使用方式
    * "off" 或者0 关闭规则
    * "warn" 或者1 将规则打开为警告（不影响退出代码）
    * "error" 或者2 将规则打开为错误（触发时退出代码为1）
    * 如：'no-restricted-syntax': 0, // 表示关闭该规则
    * 【】如果某项规则，有额外的选项，可以通过数组进行传递，而数组的第一位必须是错误级别。如0,1,2
    * 如 'semi': ['error', 'never'], never就是额外的配置项
    */
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': 0, // 不需要强制使用全等
    'max-len': 0,
    'no-under': 0, // 不允许混合使用运算符
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
};