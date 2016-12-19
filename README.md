# Continuous Deployment

[![Travis-CI badge](https://travis-ci.org/mikamboo/continuous-deployment.svg?branch=master)](https://travis-ci.org/mikamboo/continuous-deployment)

A poc of app built on __continuous deployment__ process. It demonstrate how we can integrate [Taiga](https://tree.taiga.io), [Travis-CI](https://travis-ci.org), [Github](https://github.com) around an [angularjs](https:://angular.io) project.


## Development server

This app is an [angular 2](https://angular.io) project generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.


### Prerequistes

* node  v4.x.x & npm 3.x.x
* [angular-cli](https://github.com/angular/angular-cli) 
* [travis-ci cli](https://github.com/travis-ci/travis.rb)


### Start 

Get source code 

```
$ git clone https://github.com/mikamboo/continuous-deployment.git
$ cd continuous-deployment
$ npm start
```
Navigate to `http://localhost:4200/` see app in action.


## Build, test, deploy

The [angular-cli](https://github.com/angular/angular-cli) tool provides some usefull commands task that we wrapped by npm : 

* `npm build` to build the project (with -prod flag). 
* `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* `npm deploy`  for deploying to Github Pages


## Project links 

* Source code : [Github sources](https://github.com/mikamboo/continuous-deployment)
* CI server : [Travis-CI builds](https://travis-ci.org/mikamboo/continuous-deployment)
* Project mangement : [Taiga project](https://tree.taiga.io/project/mikamboo-continuous-deployment)


## Resources

* [Tuto : travis-ci deploy on gh-pages](https://gist.github.com/mikamboo/5b9081eda37b1b3f635d3b6dd50c4705)

## LICENSE : MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



