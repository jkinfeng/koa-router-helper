# [@jkinfeng/koa-router-helper](https://github.com/jkinfeng/koa-router-helper)

> Autoload router files for [koa-router](https://github.com/koajs/router).

[![Node.js Version](https://img.shields.io/node/v/@koa/router.svg?style=flat)](http://nodejs.org/download/)
[![NPM version](https://img.shields.io/npm/v/koa-router-helper.svg?style=flat)](https://github.com/jkinfeng/koa-router-helper) 
[![NPM Downloads](https://img.shields.io/npm/dm/koa-router-helper.svg?style=flat)](https://github.com/jkinfeng/koa-router-helper) 

## Installation

```
npm i koa-router-helper
```

## API Reference

| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| [$options] | <code>Object</code> |  |  |
| [$options.path] | <code>String</code> | process.cwd() | router base path |
| [$options.regular] | <code>Regular expression</code> | /\\.router.js$/ | router files match |

**Example**  
Basic usage:

```javascript
const koa = require('koa');
const autoloadRouter = require('koa-router-helper');
const app = new koa();

app.use(autoloadRouter());
```

```javascript
//...
app.use(autoloadRouter({
   path: 'Router base path',
   regular: /Regular expression matching route files/
}));
//...
```

## Contributing

Please submit all issues and pull requests to the [jkinfeng/koa-router-helper](https://github.com/jkinfeng/koa-router-helper) repository!

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/jkinfeng/koa-router-helper/issues).

### License

[MIT](LICENSE)