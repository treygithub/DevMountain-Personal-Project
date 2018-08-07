import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class  DeleteAdminBTN extends Component {
    constructor(props){
        super(props);
        this.handleDeleteAdmin = this.handleDeleteAdmin.bind(this)
    }

handleDeleteAdmin(id){
    axios.delete(`/api/admin/delete/${id}`)
    .then(() => this.props.getCurrentAdmin())
    .catch(err => console.log(err))
    }


        render(){
        return(
            <div>
                <Button outline color="danger"  onClick={ () =>this.handleDeleteAdmin(this.props.id)}>Delete</Button>
            </div>)
}
}
export default DeleteAdminBTN;