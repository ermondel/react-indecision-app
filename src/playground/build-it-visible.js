class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToogleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToogleVisibility}>
                    { this.state.visibility ? 'Hide details' : 'Show details' }
                </button>
                { this.state.visibility && <p>Hey. These are some details you can now see.</p> }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     visibility: false
// }

// const toggleVisibility = () => {
//     app.visibility = !app.visibility;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div className="App">
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{ app.visibility ? 'Hide details' : 'Show details'}</button>
//             { app.visibility && <p>Hey. These are some details you can now see.</p> }
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();
