import axios from 'axios';
import actionTypes from "./actionTypes";
import {setProductData,jsonStringify} from "../utils/Utils";

const key = "ProductData";

export const getProductList = () =>{
   return (dispatch) =>{
      axios.get('/ProductList.json')
      .then((response)=>{
          console.log("product list::",response.data.response);
          dispatch(setProductListData(response.data.response));
          setProductData(key,jsonStringify(response.data.response));
      })
      .catch((error)=>{
          console.log("prodcut error msg::",error);
      })
   } 
}

export const setProductListData = (productData) =>{
    return {
        type:actionTypes.SET_PRODUCT_LIST_DATA,
        payload:{
            productListData:productData,
        }    
    }
}

export const setSelectedRowData = (id) => {
    return {
        type:actionTypes.SET_SELETED_ROW,
        payload:{
            selectedRowId:id
        }
    }
}

export const deleteProductData = () => {
    return (dispatch,getState) => {
        let {productListData:dataList,selectedRowId:selectRowList} = getState();
        let filterProdData = dataList.filter((data,index) => !selectRowList.includes(index) );
        dispatch(setProductListData(filterProdData));
        dispatch(setSelectedRowData([]));

    }
}

export const addProduct = (prodObj) =>{
    return (dispatch,getState) =>{
        let {productListData:dataList,selectedRowId:selectedId,mode:mode} = getState();
        let _datalist = [...dataList];
        if(mode === "create"){
        prodObj.price = prodObj.price+"$";
        prodObj.offer_price = prodObj.offer_price+"$";
        prodObj.id=dataList.length +1;
        _datalist.push(prodObj);
        }
        else {
         _datalist[selectedId[0]] = prodObj;
        }
        dispatch(setProductListData(_datalist));
    } 
}

export const setMode = (data) =>{
 return {
     type:actionTypes.SET_MODE,
     payload:{
        mode:data
     }
 }

}