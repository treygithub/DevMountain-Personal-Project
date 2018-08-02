import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class  DeleteBTN extends Component {
    constructor(props){
        super(props);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
    }

handleDeleteProduct(id) {
    axios
        .delete(`/api/deleteListing/${id}`)
}
        render(){
        return(
            <div>
                <Button outline color="danger"  onClick={ () =>this.handleDeleteProduct(this.props.id)}>Delete</Button>
            </div>)
}
}
export default DeleteBTN;

