# easywebpack-html

Multiple Static Html Page Build Solution for easywebpack.

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
    include: 'page',
    template: 'view/layout.html'
  },
  alias: {
    asset: 'asset'
  },
  options: {
    externals: {
      jquery: 'window.$'
    }
  },
  loaders: {

  },
  plugins: {

  },
  create() {
  },
  done() {

  }
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