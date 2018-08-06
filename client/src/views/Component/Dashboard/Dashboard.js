import axios from 'axios';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';


class DashBoard extends Component {
    constructor(){
        super();
        this.state={
            admin:''
        }
        this.getCurentAdmin=this.getCurentAdmin.bind(this)
    }
    componentDidMount(){
      this.getCurentAdmin();
    }

getCurentAdmin =  ()  => {
  const { admin } = this.state
    axios
    .get('/api/admin/current')
    this.setState({ 
    admin:admin.data
    })

}

render(){
//   let {admin} = this.state
// console.log(admin)
//  let instanceLooper  = admin.map((e,i) => {

    <Table>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td></td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>

return(
<div>
  <div className="dashboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Admin Dashboard</h1>
          <p className="lead text-muted">Welcome {this.state.admin}</p>
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
            <th>Delete Btn</th>
          </tr>
        </thead>
        </Table>
          {/* {instanceLooper} */}
        </div>
      </div>
    </div>
  </div>
</div>
)}
}

export default DashBoard;