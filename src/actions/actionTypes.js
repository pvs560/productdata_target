import { createConstants } from '../utils/Utils';

const ProductActionTypes = createConstants(
    "SET_PRODUCT_LIST_DATA",
    "SET_SELETED_ROW",
    "SET_MODE"
);

export default ProductActionTypes;