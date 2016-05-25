# html-requirer[![Build Status](https://travis-ci.org/supercrabtree/html-requirer.svg?branch=master)](https://travis-ci.org/supercrabtree/html-requirer)

Allows you to require html into your js as a string for use in templates. Uses
readFileSync under the hood, so works best in situations performance is not so
important. i.e. build scripts.

### Install

`npm install html-requirer`

### Usage

```js
const requireHtml = require('html-requirer');
const header = requireHtml('../../templates/header.html');

const html = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    ${header}
    <section>
      <p>other stuff</p>
    </section>
  </body>
  </html>
`;

```
