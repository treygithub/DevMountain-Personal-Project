import React, {Component} from 'react';
import MenuForm from './MenuForm'
import AdminMenu from './AdminMenu';


class EditMenu extends Component {
  render() {
    return (
      <div>
        <MenuForm/>
        <AdminMenu/>
      </div>
    )
  }
}
export default EditMenu;