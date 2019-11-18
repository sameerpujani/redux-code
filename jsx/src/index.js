// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// const React = require('react');         // For using import the CommonJS modules

// Create a react Component
const App = () => {
    return <div>Hi There!</div>;
};

// Take the react Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);