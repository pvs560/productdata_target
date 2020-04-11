import React from "react";

export class ProductCreationForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnChange = (event) =>{
        if(event.currentTarget.type !== "radio")
        this.props.onHandleChange(event.currentTarget.id, event.currentTarget.value);
        else
        this.props.onHandleChange(event.currentTarget.name, event.currentTarget.value);

    }

    render() {
        return (
            <div className="flex-container flex-container-v">
                <div className="flex-container flex-container-h width50">
                <label className="flex1">ProductName</label>
                <input type="text" className="flex2" id="product_name" name="Name" value={this.props.productObject.product_name}  onChange={this.handleOnChange} />
                </div>
                <br />
                <div className="flex-container flex-container-h width50">
                <label className="flex1">ProductDesc</label>
                <input type="text" className="flex2" id="product_description" name="Desc" value={this.props.productObject.product_description} onChange={this.handleOnChange} />
                </div>
                <br />
                <div className="flex-container flex-conatiner-h">
                <div className="flex1"><label>Stock Avaliable</label></div>
                <div className="flex5">    
                <input
                    type="radio"
                    id="yes"
                    name="stock_avaliable"
                    value="Yes"
                    checked={(this.props.productObject.stock_avaliable === "Yes" )?"checked":""}
                    onClick={this.handleOnChange}
                />
                <label className="pl-10" htmlFor="yes">
                    Yes
                    </label>
                <input
                    type="radio"
                    id="no"
                    name="stock_avaliable"
                    value="No"
                    checked={(this.props.productObject.stock_avaliable === "No" )?"checked":""}
                    onClick={this.handleOnChange}
                />
                    <label className="pl-10" htmlFor="no">
                        No
                      </label>
                      </div>
                     </div> 
                    <br />
                    <div className="flex-container flex-container-h width50">
                    <label className="flex1">Price</label>
                    <input type="text" className="flex2" id="price" name="price" value={this.props.productObject.price} onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div className="flex-container flex-container-h width50">
                    <label className="flex1">Offer Price</label>
                    <input type="text" className="flex2" id="offer_price" name="OfferPrice" value={this.props.productObject.offer_price} onChange={this.handleOnChange} />         
                    </div>
            </div>
        )
    }
}