import history from "../helpers/history";


export const createReducer = (initialState, reducerMap) => {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];
        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export const createConstants = (...constants) => {
    let reducedConst = constants.reduce((obj, constant) => {
        var newObject = {
            ...obj,
            [constant]: constant.toString()
        }
        return newObject;
    }, {});
    const freezedConst = Object.freeze(reducedConst);
    return freezedConst;
}

export const replaceHistory = (newState) => {
    history.replace(newState);
  }
  
export const pushHistory = (newState) => {
    history.push(newState);
  }

export const coloumnData = () =>( [
        { key: 'id', name: 'ID' },
        { key: 'product_name', name: 'Product Name' },
        { key: 'product_description', name: 'Product Description' },
        { key: 'stock_avaliable', name: 'Stock Avaliable' },
        { key: 'price', name: 'Price' },
        { key: 'offer_price', name: 'Offer Price' }
]);

export const setProductData = (key,data) =>{
    sessionStorage.setItem(key,data);
}

export const getProductData = (key) =>{
    return sessionStorage.getItem(key);
}

export const jsonStringify = (data) => JSON.stringify(data);

export const parseJson = (data) => JSON.parse(data);

export const productDataObj = () => ({
    'id':0,
    'product_name':"",
    'product_description':"",
    'stock_avaliable':"",
    'price':"",
    'offer_price':""
    })