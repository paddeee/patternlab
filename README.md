# Energised Agent Component Pattern Library

## Prerequisites

The Energised Agent Component Pattern Library uses [Node](https://nodejs.org) for core processing, [npm](https://www.npmjs.com/) to manage project dependencies, and [gulp.js](http://gulpjs.com/) to run tasks and interface with the core library. Node version 4 or higher suffices. You can follow the directions for [installing Node](https://nodejs.org/en/download/) on the Node website if you haven't done so already. Installation of Node will include npm.

It's also highly recommended that you [install gulp](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) globally.

## Installing

Install git locally [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

`npm` is a dependency management and package system which can pull in all of the Energised Agent Component Pattern Library's dependencies for you. To accomplish this:

* download or `git clone` this repository to an install location.

* run the following

    ```
    cd install/location - (Change directory to the root of the installed directory)
    npm install
    ```

Running `npm install` from a directory containing a `package.json` file will download all dependencies defined within.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

> These commands assume a global installation of gulp 4.X, instead of a local installation. 

### List all of the available commands

To list all available commands type:

    gulp patternlab:help

### Generate Energised Agent Component Pattern Library

To generate the front-end for Energised Agent Component Pattern Library type:

    gulp patternlab:build

### Watch for changes and re-generate Energised Agent Component Pattern Library

To watch for changes, re-generate the front-end, and server it via a BrowserSync server,  type:

    gulp patternlab:serve

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.

### Edit files

Documentation on how to use/edit Components are available here [http://patternlab.io/docs/index.html](http://patternlab.io/docs/index.html)

### Publish changes to paddeee.github.io

* commit changes in git

    ```
    git add .
    git commit -m 'Add commit message here'
    git push origin master
    ```
    
* make sure changes in the source files have been compiled to the public directory

    ```
    gulp patternlab:build
    ```
    
* push the changes to GitHub pages (paddeee.github.io)

    ```
    cd public
    git add .
    git commit -m 'Add commit message here'
    git push origin master
    cd ..
    ```
    
### Changing theme of Site

* Change logo image here /source/images/logo.png

* In /source/css/scss/branding/abstracts/variables.scss change the $color-primary and $color-primary-dim-50 rgba colour values