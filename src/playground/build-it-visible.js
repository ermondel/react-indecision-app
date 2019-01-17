const app = {
    visibility: false
}

const toggleVisibility = () => {
    app.visibility = !app.visibility;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div className="App">
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{ app.visibility ? 'Hide details' : 'Show details'}</button>
            { app.visibility && <p>Hey. These are some details you can now see.</p> }
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
