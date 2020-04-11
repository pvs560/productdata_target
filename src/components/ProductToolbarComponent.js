import React from "react";
import { PopUpModal } from "./PopUpModal";
import { ProductCreationForm } from './ProductCreationForm';
import {productDataObj} from '../utils/Utils';

export default class ProductToolbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            productObject:productDataObj()
        }   
    }


    onHandleDelete = () => {
        this.props.actions.deleteProductData();
    }

    onHandleCreate = () => {
        this.setState({ modalShow: !this.state.modalShow, productObject:productDataObj()});
        this.props.actions.setMode("create");
    }

    onHandleUpdate = () =>{
        let selProductData = this.props.productListData[this.props.selectedRowId];
        this.props.actions.setMode("update");
        console.log("onEditmode::",selProductData);
        this.setState({ modalShow: !this.state.modalShow,productObject:selProductData}); 
    }

    onHandleSubmit = (event) => {
        console.log("button clicked", event);
        if(event){
            this.setState({ modalShow: !this.state.modalShow });
            this.props.actions.addProduct(this.state.productObject);
        }
        else {
          console.log("on close button::");
          this.setState({ modalShow: !this.state.modalShow });  
        }
    }
    onHandleChange = (objProperty, value) => {
        console.log("onHandle Blur::", objProperty, value);
        let prodObjdata = {...this.state.productObject};
        prodObjdata[objProperty] = value;
        this.setState({productObject:prodObjdata});
    }
    onHandleReset = (e) => {
        console.log("on reset::", e);  
      this.setState({productObject:productDataObj()});
    }

    render() {
        return (
            <>
                <button type="button" id="create" name="create" value="create" className="btn btn-outline-primary marg_right_1rem" onClick={this.onHandleCreate}>Create</button>
                <button type="button" id="update" name="update" value="update" className="btn btn-outline-primary marg_right_1rem" onClick={this.onHandleUpdate} disabled={(this.props.selectedRowId.length > 1?true:false)}>Edit</button>
                <button type="button" id="delete" name="delete" value="delete" className="btn btn-outline-danger marg_right_1rem" onClick={this.onHandleDelete}>Delete</button>
                <PopUpModal show={this.state.modalShow} 
                onHide={this.onHandleSubmit}
                onReset={this.onHandleReset} 
                headername="Add Product" 
                popupbody={<ProductCreationForm productObject={this.state.productObject} onHandleChange={this.onHandleChange}/>} 
                footersave="Save"
                footerreset="Reset"
                />
            </>
        )
    }
}