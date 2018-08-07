import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginAdmin} from '../../ducks/actions/authActions';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import {  Button, Form, FormGroup, Label, Input, Container, Media } from 'reactstrap';
import './login.css'

class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      errors:''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAdmin) {
      window.location.href = "http://localhost:3000/#/dashboard"
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.nextProps.auth.isAdmin){
      window.location.href = "http://localhost:3000/#/dashboard"
    }

    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
    
  }

  onSubmit(e){
    e.preventDefault();

    const adminData ={
      email:this.state.email,
      password: this.state.password
    };
    this.props.loginAdmin(adminData, this.props.history)
    }  
    
  render(){
    const { errors } = this.state;
    console.log(this.props)

  return (

<Container className="skoal" fluid>
    <Form onSubmit={this.onSubmit}>
        <h1 className="display-4 text-center">Sing In</h1>
        <p className="lead text-center">Log into your Administration account</p>
        <Media middle>
          <FormGroup >
            <Label for="Email">Email</Label>
                <Input 
                value={this.state.email}
                onChange={this.onChange} 
                type="email" 
                name="email" 
                id="Email" 
                placeholder="Enter Email"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })}
                />
                 {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          </FormGroup>
        </Media>
        <Media middle>
        <FormGroup>
          <Label for="Password">Password</Label>
              <Input 
              value={this.state.password}
              onChange={this.onChange} 
              type="password" 
              name="password" 
              id="Password" 
              className="pass"
              placeholder="Enter Password" 
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password
              })}   
              />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
        </FormGroup>
        </Media>
        <FormGroup >  
            <Button outline type="submit">Submit</Button>
        </FormGroup>
    </Form>
</Container>

  //   <div>
  //      <div className="login">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-8 m-auto">
  //         <h1 className="display-4 text-center">Sing In</h1>
  //         <p className="lead text-center">Log into your Administration account</p>

  //         <form onSubmit={this.onSubmit}>
            
  //           <div className="form-group">
  //             <input type="email" 
              // className={classnames('form-control form-control-lg', {
              //   'is-invalid': errors.email
              // })}  
  //             placeholder="Email Address" 
  //             name="email" 
  //             value={this.state.email}
  //             onChange={this.onChange}
  //             />
  //             {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
  //           </div>

  //           <div className="form-group">
  //             <input type="password" 
              // className={classnames('form-control form-control-lg', {
              //   'is-invalid': errors.password
              // })}   
  //             placeholder="Password" 
  //             name="password" 
  //             value={this.state.password}
  //             onChange={this.onChange}
  //             />
  //             {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
  //           </div>

  //           <input type="submit" className="btn btn-info btn-block mt-4" />
  //         </form>

  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   </div>
  )
}
}

//All properties in Component
Login.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

//State to be updated
const mapStateToProps = (state) =>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{ loginAdmin })(Login);