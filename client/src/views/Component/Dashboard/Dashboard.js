import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import DeleteBTN from '../Product/DeleteBTN'


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
  let {admin, name, email} = this.state
console.log(this.state)
 let instanceLooper  = admin.map((e,i) => {
return(
    <Table>
        <tbody key={i}>
          <tr>
            <th scope="row"></th>
            <td>name={e.name}</td>
            <td>email={e.email}</td>
            <td> <DeleteBTN /> </td>
          </tr>
        </tbody>
    </Table>
    
 )})
return(
<div>
  <div className="dashboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Admin Dashboard</h1>
          <p className="lead text-muted">Welcome {admin.name ? admin.name : null}</p>

          <div className="btn-group mb-4" role="group">
              <Link to="/EditWebsite" className="btn btn-light">
              <i className="fa fa-desktop" aria-hidden="true"></i> Edit Website</Link>
              <Link to="/EditMenu" className="btn btn-light">
              <i className="fa fa-beer" aria-hidden="true"></i> Edit Menu
                </Link>
              <Link to="Register" className="btn btn-light">
              <i className="fas fa-user-circle text-info mr-1"></i>
                Register New Admin</Link>
          </div>

         <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>e.name</th>
                <th>e.email</th>
                <th></th>
              </tr>
            </thead>
        </Table>
              { instanceLooper }
        </div>
      </div>
    </div>
  </div>
</div>
)}
}

export default DashBoard;