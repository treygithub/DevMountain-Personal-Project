import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import DeleteAdminBTN from './EditAdmin/DeleteAdminBTN'
import './dashboard.css'


class DashBoard extends Component {
    constructor(){
        super();
        this.state={
            admin:[],
           
        }
        this.getCurrentAdmin=this.getCurrentAdmin.bind(this)
    }
    componentDidMount(){
      this.getCurrentAdmin();
    }

//Get
getCurrentAdmin(){
  axios.get('/api/admin/current').then(payload => {
    this.setState({
      admin: payload.data
    });
  })
}

render(){
  // console.log(admin)
  let {admin} = this.state
// console.log(this.state)
 let instanceLooper  = admin.map((e,i) => {
return(
  
        <tbody key={i} i={i}>
          <tr>
            <th scope="row"></th>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td> 
              <DeleteAdminBTN id={e._id} getCurrentAdmin={this.getCurrentAdmin}
              /> 
            </td>
          </tr>
        </tbody>
  
    
 )})
return(
<div>
  <div className="dashboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Admin Dashboard</h1>
           
          <div className="btn-group mb-4" role="group">
              <Link to="/EditWebsite" className="btn btn-light">
              <i className="fa fa-desktop" aria-hidden="true"></i> Edit Website</Link>
              <Link to="/AdminMenu" className="btn btn-light">
              <i className="fa fa-beer" aria-hidden="true"></i> Edit Menu
                </Link>
              <Link to="Register" className="btn btn-light">
              <i className="fas fa-user-circle text-info mr-1"></i>
                Register New Admin</Link>
          </div>

         <Table striped>
            <thead>
              <tr>
              <th></th>
                <th>Name</th>
                <th>email</th>
                <th></th>
              </tr>
            </thead>
        
              { instanceLooper }
              </Table>
        </div>
      </div>
    </div>
  </div>
</div>
)}
}

export default DashBoard;