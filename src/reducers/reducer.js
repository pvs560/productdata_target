import {createReducer} from "../utils/Utils";
import actionTypes from "../actions/actionTypes"

const initialState = {
    "productListData": null,
    "selectedRowId":[],
    "mode":null
}

let ProductReducer = createReducer(initialState,{
    [actionTypes.SET_PRODUCT_LIST_DATA]:(state,payload)=>{
        return {...state,...payload};
    },
    [actionTypes.SET_SELETED_ROW]:(state,payload) =>{
        return {...state,...payload};
    },
    [actionTypes.SET_MODE]:(state,payload) =>{
        return {...state,...payload};
    }

});

export default ProductReducer;