import React, { Component, Fragment } from "react";

class CardProduct extends Component {
    state = {
        order: 4,
        name: "DEDE"
    }

    handleCounterChange = (newValue) => {
        // this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMnius = () => {
        if (this.state.order) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt=""></img>
                    </div>
                    <div className="troley">
                        <img src="" alt=""></img>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://img.okezone.com/content/2017/08/03/298/1749395/masak-daging-dengan-teknik-slow-cook-biar-steak-tidak-alot-seperti-karet-SxADyrKYBt.jpg" alt="dummy"></img>
                    </div>
                    <p className="product-title">Daging Ayam</p>
                    <p className="product-price">Rp 410.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMnius}>-</button>
                        <input type="text" value={this.state.order} onChange={this.handleCounterChange}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;