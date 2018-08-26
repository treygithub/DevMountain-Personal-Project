import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class  DeleteProductBTN extends Component {
    constructor(props){
        super(props);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
    }

handleDeleteProduct(id) {
    // console.log(id)
    axios.delete(`/api/product/${id}`)
    .then(() => this.props.getProducts())
    .catch(err => console.log(err))
}
        render(){
            // console.log(this.props)
        return(
            <div>
                <Button outline color="danger"  onClick={ () =>this.handleDeleteProduct(this.props.id)}>Delete</Button>
            </div>)
}
}
export default DeleteProductBTN;