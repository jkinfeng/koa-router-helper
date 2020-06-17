1.0.5 / 2020-06-17
==================
- fix when no router files found, then the 'koa-compose' can't autoload router files.
  return an empty function
    
1.0.4 / 2020-06-16
==================

- fix `$options`. when only a single parameter is entered, the parameter will be wrong
- fix `$options.regular`. default value: /router.js$/ change to /\\.router.js$/
- add warning prompt for non route files when routes are autoload.
    - Example warning prompt: `this is not a valid router file of: ...path.../x.router.js`
