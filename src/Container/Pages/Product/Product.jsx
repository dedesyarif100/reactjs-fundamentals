import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import './Product.css'

class Product extends Component {
    state = {
        order: 4,
        name: "DEDE"
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    handleUbahValue = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return(
            <Fragment>
                {/* <div className="header">
                    <div className="logo">
                        <img src="" alt=""></img>
                    </div>
                    <div className="troley">
                        <img src="" alt=""></img>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div> */}
                <p>Halaman Product</p><hr/>
                <CardProduct ubahValue={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;