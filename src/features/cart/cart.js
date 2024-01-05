import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import allItems from '../../shared/utils/products/items.json';

const Cart = ({items, price, removeItem, decreasePrice, clearItems}) => {
    // Displays users shopping cart on /cart
    const folder = require.context("../../assets/images/products/", true);

    const remove = (v) => {
        console.log(parseInt(allItems[v]["price"]));
        decreasePrice(parseInt(allItems[v]["price"]));
        removeItem(v);
    }

    const purchase = (e) => {
        e.preventDefault();
    }

    const clearCart = (e) => {
        e.preventDefault();

        clearItems();
        items = [];
        price = 0;
    }

    return (
        <>
            <div id="main" className="mt-40">
                <h1>Checkout</h1>
                <h2>{items.length} {items.length !== 1 ? "Items" : "Item"}</h2>
                <div className="mt-40 mb-40">
                    {
                        items.map((item, i) =>
                            <div key={i} className="product-card">
                                <div className="product-image">
                                    <img src={folder("./"+allItems[item]["images"][0])} alt="" />
                                </div>
                                <div className="product-content">
                                    <h3>{allItems[item]["name"]}</h3>
                                    <p><strong>{allItems[item]["price"]}</strong>:-</p>
                                    <p onClick={() => remove(item)} className="red link">Remove item</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                {
                    items.length !== 0 &&
                    <div>
                        <h3>{price}:-</h3>
                        <div className="ai-center jc-left g-5">
                            <Link className="button main" to="./" onClick={(e) => purchase(e)}>
                                <h4>Purchase items</h4>
                            </Link>
                            <Link className="button warning" to="./" onClick={(e) => clearCart(e)}>
                                <h4>Clear cart</h4>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items,
        price: state.cartReducer.price,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (v) => { dispatch({type: "delete", value: v}) },
        decreasePrice: (v) => { dispatch({type: "decrease", value: v}) },
        clearItems: (v) => { dispatch({type: "clear"}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);