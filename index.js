'use strict';

const fs = require('fs');
const path = require('path');
const compose = require('koa-compose');

module.exports = autoLoadRouter;

function autoLoadRouter($options) {
    const $opts = Object.assign({
        path: process.cwd(),
        regular: /\.router.js$/
    }, $options || {});

    let __arr = [];
    searchFiles($opts).forEach(function ($routeFile) {
        try {
            __arr.push(require($routeFile).routes());
        } catch (e) {
            console.log('this is not a valid router file of: ' + $routeFile);
        }
    });
    if (__arr.length === 0) {
        console.log('no router files found.');
        return async (ctx, next) => {
            await next();
        }
    }
    return compose(__arr);
}

function searchFiles($opts) {
    return {
        files: [],
        search: function ($path) {
            let __self = this;
            if (fs.existsSync($path)) {
                fs.readdirSync($path).forEach(function ($fileOrDirectory) {
                    let __selected = path.join($path, $fileOrDirectory);
                    if (fs.statSync(__selected).isFile()) {
                        if ($opts.regular.test(__selected.split(path.sep).pop())) {
                            __self.files.push(__selected);
                        }
                    } else {
                        __self.search(__selected);
                    }
                });
            }
        },
        exec: function ($opts) {
            this.search($opts.path);
            return this.files;
        }
    }.exec($opts);
}