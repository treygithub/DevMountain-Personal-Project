import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class DashBoard extends Component {
    constructor(){
        super();
        this.state={
            admin:'Robert H'
        }
    }

    render(){
  return (
<div>
  <div className="dashboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Admin Dashboard</h1>
          <p className="lead text-muted">Welcome {this.state.admin}</p>
          
          <div className="btn-group mb-4" role="group">
            <Link to="/EditWebsite" className="btn btn-light">
            <i class="fa fa-desktop" aria-hidden="true"></i> Edit Website</Link>
            <Link to="/EditMenu" className="btn btn-light">
            <i class="fa fa-beer" aria-hidden="true"></i> Edit Menu
              </Link>
            <Link to="Register" className="btn btn-light">
            <i className="fas fa-user-circle text-info mr-1"></i>
              Register New Admin</Link>
          </div>

          <div>
            <h4 className="mb-2">Experience Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Years</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tech Guy Web Solutions</td>
                  <td>Senior Developer</td>
                  <td>
                    02-03-2009 - 01-02-2014
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    02-03-2015 - Now
                  </td>
                  <td>
                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
}

export default DashBoard;