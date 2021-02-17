- npm install -g @vue/cli

- vue create electron-vue

- npm install --save-dev electron@latest

- create main.js and set `"main": "main.js"` inside package.json

- add electron start script to package.json `"start" : "vue-cli-service build && electron ."`

- To resolve security warnings, Add a config file named `vue.config.js` and add following configuration:
  ```
  module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
  }
  ```

- To discover new releases of the packages, run `npm outdated`.

** Electron Production Build **
```
npx @electron-forge/cli import
npm run make
```