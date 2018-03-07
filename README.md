# easywebpack-html

static html webpack build for easywebpack.

- support static html template
- support nunjucks html template

## Version

- webpack 3.x.x :  easywebpack ^3.x.x
- webpack 4.x.x :  easywebpack ^4.x.x

## Install

```bash
$ npm i easywebpack-html --save-dev
```

## Usage

```js
// build/index.js
const HtmlWebpack = require('easywebpack-html');
const config = {
  entry: {
    index: './scr/index.js'
  },
  template: 'view/layout.html'
};

if (process.env.NODE_SERVER) {
  // development mode: webpack building and start webpack hot server
  HtmlWebpack.server(config);
} else {
  // webpack build file to disk
  HtmlWebpack.build(config);
}
```

## Run

```js
{
 "scripts": {
   "build": "cross-env NODE_ENV=development node build",
   "start" : "cross-env NODE_SERVER=true NODE_ENV=development node build"
 }
}
```

```bash

npm start

```

## Example

- [easywebpack-multiple-html-boilerplate](https://github.com/hubcarl/easywebpack-multiple-html-boilerplate) Multiple static html build boilerplate.

- you can use [easywebpack-cli](https://github.com/hubcarl/easywebpack-cli) create multiple static html build boilerplate.