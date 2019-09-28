import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false,
            namecoded: 'Daine1726',
            passwordcoded: 'L@csiram1747',
            name: '',
            passwordIn: ''

        }
    }
    loginHandler(e) {
        e.preventDefault();
        if (this.state.name === this.state.namecoded  && this.state.passwordIn === this.state.passwordcoded) {
            this.setState({ user: true });
        }else{
            alert('Login failed');
            this.setState({user: false })
        }
    }
    usernameHandler(e) {
        this.setState({name: e.target.value});

    }
    passwordHandler(e) {
        this.setState({passwordIn: e.target.value });
    }

    render() {
        if (!this.state.user) {
            return (
                <center>
                <div class= 'jumbotron'>
                    <h1>Login Form</h1><br/>
                    {/* {this.state.name} */}
                    <form class="form-group">
                        <label for="username">Enter Username:</label>
                        <input type="text" placeholder="enter username" id="username" class="form-control" onChange={(e) => this.usernameHandler(e)}></input><br/>
                        <label for="password">Enter Password:</label>
                        <input type="password"  class="form-control" id="password" placeholder="*******" onChange={(e) => this.passwordHandler(e)}></input><br/>
                        <button  class="btn btn-primary" onClick={(e) => this.loginHandler(e)}>Login</button>
                    </form>
                </div></center>

            );
        }
        if (this.state.user) {
            return (
                <Dashboard name={this.state.name} />
            );
        }

    }


}

export default Login;