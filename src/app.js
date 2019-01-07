console.log('App.js is running!');

let app = {
    title: 'Indecision App',
    options: [],
};

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? "Here are your options" : "No options"}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let user = {
    name: 'Terry',
    age: 46,
    location: 'Cambridge'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

let templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
