# md-cat [![Build Status](https://travis-ci.com/elzup/md-cat.svg?branch=master)](https://travis-ci.com/elzup/md-cat)

> cat file with markdown code block format.


## Install

```
$ npm install md-cat
```


## Usage

```js
const mdCat = require('md-cat');

mdCat('unicorns');
//=> 'unicorns & rainbows'
```


## API

### mdCat(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global md-cat
```

```
$ md-cat --help

  Usage
    md-cat [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ md-cat
    unicorns & rainbows
    $ md-cat ponies
    ponies & rainbows
```
