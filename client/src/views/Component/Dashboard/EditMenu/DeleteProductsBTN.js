import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class  DeleteProductBTN extends Component {
    constructor(props){
        super(props);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
    }

handleDeleteProduct(id) {
    axios
        .delete(`/api/product/delete/${id}`)
}
        render(){
        return(
            <div>
                <Button outline color="danger"  onClick={ () =>this.handleDeleteProduct(this.props.id)}>Delete</Button>
            </div>)
}
}
export default DeleteProductBTN;