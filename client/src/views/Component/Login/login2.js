import React, {Component} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Login2 extends Component  {
    constructor(props) {
      super(props);
      this.state = {
          email:'',
          password:''
      }

    }

    handleEmail(value) {
      this.setState({email: value})
      console.log(value);
    }

    handlePassword(value) {
      this.setState({password: value})
      console.log(value);
    }

    AdminLogin = () => {
      let {email,password} = this.state
      axios.post('/api/auth/post', {email,password} );
      }

    render() {
      return (
        <div className="wrapper">
        <form>
        <h1>step3</h1>
          <h3>Monthly Mortgage Amount: </h3>
          <input value={this.state.email} name="email" type="text" placeholder="Enter email" onChange={e => this.handleEmail(e.target.value)} />
          <h3>Desired Monthly Rent: </h3>
          <input value={this.state.password} name="password" type="text" placeholder="Enter Password" onChange={e => this.handlePassword(e.target.value)} />
          <div className="buttons">
            <button onClick={() => this.AdminLogin()}>Add to Inventory</button>
          </div>
        </form>
        </div>
      )
    }
  }
  export default Login2;