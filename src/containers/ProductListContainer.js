import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from "../actions/actions";
import ProductListComponent from "../components/ProductListComponent";

const mapStateToProps = (state)=>({
productListData:state.productListData,
selectedRowId:state.selectedRowId
})

const mapDispatchToProps = (dispatch)=>({
actions: bindActionCreators(Actions, dispatch)
})

const ProductListContainer = connect(mapStateToProps,mapDispatchToProps)(ProductListComponent);

export default ProductListContainer;
