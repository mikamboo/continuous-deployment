# Continous Deployment

A poc of app built on __continuous deployment__ process. 


## Development server

This app is an [angular 2](https:://angular.io) + [firebase](https://firebase.google.com/) project generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.


### Prerequistes

* node  v4.x.x & npm 3.x.x
* [angular-cli](https://github.com/angular/angular-cli) 


### Start 

Get source code 

```
$ git clone https://github.com/mikamboo/continuous-deployment.git
$ cd continuous-deployment
$ ng serve
```
Navigate to `http://localhost:4200/` see app in action.

## Build, test, run, deploy ...

The [angular-cli](https://github.com/angular/angular-cli) tool provides some usefull commands task like : 

* `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* `ng github-pages:deploy` for deploying to Github Pages

## Project links 

* Source code : [Github](https://github.com/mikamboo/continuous-deployment)
* CI server : [Travis-CI](https://travis-ci.org/mikamboo/continuous-deployment)
* Project mangement : [Taiga](https://tree.taiga.io/project/mikamboo-continuous-deployment)



