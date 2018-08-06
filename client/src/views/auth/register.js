import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerAdmin} from '../../ducks/actions/authActions';
import PropTypes from 'prop-types';
import  { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor(props){
    super(props);
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
    <div>
      <div className="register">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center" id="target">Register</h1>
          <p className="lead text-center">Create a new Administrator account</p>

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input 
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
            </div>
            <div className="form-group">
              <input type="email"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })} 
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>
            <div className="form-group">
              <input type="password" 
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password
                })} 
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </div>
            <div className="form-group">
              <input type="password"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password
                })} 
                placeholder="Confirm Password"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
            </div>
            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>

        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
}

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