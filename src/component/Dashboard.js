import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <center>
                <div class="jumbotron">
                    <form class="form-group">
                        <h1>HI!</h1>
                        <h3> {this.props.name}</h3>
                        <h2>Welcome To React JS</h2>
                       
                    </form>
                </div>
            </center>
        );
    }
}
export default Dashboard;
