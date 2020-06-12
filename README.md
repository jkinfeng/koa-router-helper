# Autoload koa-router
Autoload router for koa-router

## Installation
```
npm i koa-router-helper
```

## Usage
```
const koa = require('koa');
const autoloadRouter = require('koa-router-helper');
const app = new koa();
// ------------------------------------------------
app.use(autoloadRouter());
// -----------------or-----------------------------
app.use(autoloadRouter({
   path: <router path>,
   regular: <router file>
}));
// ------------------------------------------------
```

### Options
```
path: router files path
  default: process.cwd()
  example: require('path').join(process.cwd(), 'routers')
  
regular: regular expression matching files
  default: /router.js$/
  example: a.router.js, bbb.router.js ...
```

## Version
1.0.3

## Copyright
(C) 2020 Jkin.Feng

## Licensed
MIT
