import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <App />, // react renders this App component
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* That if you want to execute a package without installing it on your computer and then launch it you can use npx directly.
Speaking of react , create-react-app is an utility to bootstrap a react project: if you use it with npx ( npx create-react-app my-app ) you will have your my-app project in place without the need to install create-react-app itself ( which will need another passage: npm install create-react-app and then create-react-app my-app) */

/* npm:
npm create-react-app my-app executes the local create-react-app package from your machine, so you first have to install it globally on your system with npm install -g create-react-app. If you want to run a package using npm, you must specify that package in your package.json file and install a package locally on a project: npm install package-name.

npx:
If you run npx create-react-app my-app and don’t have create-react-app globally on your system, it will get downloaded and not installed globally. This is great if you don’t want to pollute your system with global packages that you only run once every two months. 
A major benefit of npx is that it will automatically install npm packages that aren’t already installed. npx is also very useful in cases where the package needs to be installed then configured before running. npx will check whether command exists in $PATH, or in the local project binaries, and execute it. If commands not found, it will be installed prior to execution: npx package-name.
Another advantage of npx is the ability to execute a package that wasn’t previously installed. As an example: npx create-react-app my-app

create-react-app is an npm package that is expected to be run only once in a project’s lifecycle. Hence, it is preferred to use npx to install and run it in a single step. */