import React from "react";
import ProductTableData from './ProductTableData';
import ProductToolbarContainer from '../containers/ProductToolbarContainer';
import PropTypes from "prop-types";

export default class ProductListComponent extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        this.props.actions.getProductList();
    }

    onRowSelected = (id) => {
      this.props.actions.setSelectedRowData(id);
    }


    render() {
        return (
            this.props.productListData != null && (
                <div className="flex-container flex-container-v">
                    <div className="flex-container flex-container-h flex1  padding_1rem">
                    <ProductToolbarContainer/>
                    </div>
                    <div classname="flex-container flex2"><ProductTableData {...this.props} setSelectedRowData={this.onRowSelected}/></div>
                </div>)
        )
    }

}