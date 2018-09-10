import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerAdmin} from '../../ducks/actions/authActions';
import PropTypes from 'prop-types';
import  { withRouter } from 'react-router-dom';
import {Button, Input, FormGroup,Form, Container} from 'reactstrap';
import './login.css'

class Register extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      password2:'',
      errors:''
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
//change to new version if you get the chance
  componentWillReceiveProps(nextProps){
      if(nextProps.errors){
        this.setState({errors: nextProps.errors})
      }
  }
// Awesome onChange handler
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    const newAdmin = {
      name: this.state.name,
      email:this.state.email,
      password:this.state.password,
      password2:this.state.password2
    };
    this.props.registerAdmin(newAdmin, this.props.history);
 }  

  render(){ 
    const { errors } = this.state;

  return (
    
      
     
        <Container className="skoal" fluid>
          <Form onSubmit={this.onSubmit}>
          <h1 className="display-4 text-center" id="target">Register</h1>
          <p className="lead text-center">Create a new Administrator account</p>
            <FormGroup>
              <Input 
                type="text" 
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.name
                })}  
                placeholder="Name" 
                name="name"
                value={this.state.name}
                onChange={this.onChange} 
              />
              {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
            </FormGroup>
            <FormGroup>
              <Input type="email"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })} 
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </FormGroup>
            <FormGroup>
              <Input type="password" 
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password
                })} 
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </FormGroup>
            <FormGroup>
              <Input type="password"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password
                })} 
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
            </FormGroup>
            <Button outline type="submit" className="btn ">Submit</Button>
          </Form>

        </Container>
   
  
  )
}
}
//Rudex stuff
Register.propTypes ={
  registerAdmin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {registerAdmin})(withRouter(Register));