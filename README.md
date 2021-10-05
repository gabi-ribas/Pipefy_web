# Read me
**This document describes how to install the required components and run the automated web test case**

# Requirements:
- Google Chrome browser
- Node.js
- Yarn
*If you don't have google Chrome installed, please get it from here*
*If you don't have Node.js/npm installed, please get it from: https://nodejs.org/en/download/*
*If you don't have Yarn installed, please get it from: https://classic.yarnpkg.com/lang/en/docs/install/*

# Express way:

 - Clone this repository
 - From this repository's root source, run the `yarn install` command on the terminal
 - From this repository's root source, run  the`npm test` command on the terminal
 
# If the express way doesn't work, you may try the following steps:

## Install Cypress in a repository of your liking
*This step may be ignored if you already have cypress installed*
- Follow the instructions at https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements to install cypress.
- For this project, it's recommended that the installation may be done via npm
	- Make sure you run `npm init` (as recommended in the installation instructions) and have your package.json file created
	- Make sure you run Cypress for the first time to check if it's properly installed (run instructions are also available in the link above)

## Open the repository in a JavaScript supporting IDE of you liking
- In case you don't have one installed, you may download Visual Studio Code from here: https://code.visualstudio.com/

*If you have any doubts about how to use Visual Studio Code, you may check the documentation here: https://code.visualstudio.com/docs*

## Install the cypress file upload library

 - To install it, follow the steps here: https://www.npmjs.com/package/cypress-file-upload
 
*Make sure you follow the steps to add the requirements to the specified files*

## Clone this git repository
- Clone this git repository to your local files (If you haven't already while trying the express way)

## Copy the test and fixture files to the cypress repository
- Copy the `repository where you cloned this git repository]/cypress/integration/pipefy_test` folder to the `[repository where you installed cypress]/cypress/integration` directory
- Copy the `[repository where you cloned this git repository]cypress/fixtures/myfixture.jpg` file to the `[repository where you installed cypress]cypress/fixtures` directory

## Run the test
- Run Cypress following the instructions available on:  https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements
- On the Cypress window, click on "pipefy_test" to run it

## Run test troubleshooting
- If Cypress encounters an error while trying to connect to the browser, add the following to the "scripts" section of your package.json:    
 `"test": "node_modules\\.bin\\cypress run --headed --browser chrome",	"runtests": "npm run test -- "`
- Run the test via the `npm test` command on the terminal (from the same directory the package.json)
