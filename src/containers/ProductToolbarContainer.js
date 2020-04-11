import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from "../actions/actions";
import ProductToolbarComponent from "../components/ProductToolbarComponent";

const mapStateToProps = (state)=>({
    productListData:state.productListData,
    selectedRowId:state.selectedRowId
    })

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

const ProductToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(ProductToolbarComponent);

export default ProductToolbarContainer;