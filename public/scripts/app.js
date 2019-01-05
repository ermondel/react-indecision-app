console.log('App.js is running!');

// JSX - JavaScript XML
// let template = <p>This is JSX from app.js</p>;
var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new"
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
