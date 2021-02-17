# electron-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Electron Production build
```
npm run build
npm run package
// Following folders are needed for vue to work in the final package
resources/app/dist/*
resources/app/node_modules/*
main.js
package.json
```
