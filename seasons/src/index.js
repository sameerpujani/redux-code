import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS ONLY TIME we direct assignment
        // to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState!!!
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                // error callback - setState for err
                this.setState({ errorMessage: err.message })
            }
        );
    }

    // React says we have to define render!!
    render() {
        if( this.state.errorMessage && !this.state.lat ) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if( !this.state.errorMessage && this.state.lat ) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));