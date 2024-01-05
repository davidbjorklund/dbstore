import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Breadcrumbs } from '../../shared/components';

import "./item.css";

import items from '../../shared/utils/products/items.json';

const Item = ({ purchaseItem, increasePrice }) => {
    // Page for dispaying a specific item


    const navigate = useNavigate();
    const id = useParams("id")["id"];

    const [item, setItem] = useState({"images": [],"name": "", "price": 0, "others": []});
    const [current, setCurrent] = useState(-1);

    const [bought, setBought] = useState(false);

    const changeImage = (next) => {
        setCurrent(_ => next);
    }

    let folder = require.context(`../../assets/images/products/`, true);

    useEffect(()=>{
        let exists = Object.entries(items).find(([item_name,_]) => item_name === id) != null;
        if(!exists){
            navigate("/shop/")
        }
        setItem(_ => items[id]);
        changeImage(0);
    
    }, []);
    

    const path = [
        {
            name:"Browse Products",
            link:"/shop"
        },
        {
            name:item["gender"],
            link:"/shop/"+item["gender"]
        },
        {
            active:true,
            name:item["name"],
            link:"./"
        }
    ];

    const purchase = (e) => {
        e.preventDefault();
        // ADD TO CART
        purchaseItem(item["id"]);
        increasePrice(parseInt(item["price"]));
        setBought(_ => true);
        setTimeout(() => {setBought(_ => false)});
    }


    return (
        <>
            <Breadcrumbs path={path}/>
            <div className="row mb-40 product-view">
                <div className="db-6 gap-40">
                    <div className="row">
                        <div className="db-12">
                            <div className="card card-large mb-10">
                            {item["images"].map((image,i) => 
                                i === current && <img key={i} src={folder("./"+image)} alt=""/>
                            )}
                            </div>
                        </div>
                        {
                            item["images"].map((image,i) => 
                                <div key={i} className="db-3 gap-10" onClick={() => changeImage(i)}>
                                    <div className="card card-extra-small">
                                        <img src={folder("./"+image)} alt="" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="db-6 gap-40">
                    <h2>{item["name"]}</h2>
                    <hr></hr>
                    <div className="row mt-20">
                        <div className="db-12">
                            <div className="list-row m-0 jc-left g-20 ai-center">
                                <Link to="/shop" className="button main" onClick={(e)=>purchase(e)} disabled={bought}>
                                    <h4>Add to cart</h4>
                                </Link>
                                <h2 className="m-0">{item["price"]}:-</h2>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <p><strong>Few in storage</strong> - get one now!</p>
                    <div>
                        
                    </div>
                </div>
            </div>
            <section id="recommended" className="split-above">
                <h2>Recommended watches:</h2>
                <hr />
                <div className="list-row jc-left g-20">
                    {
                        item.others.map((nextId, i) => 
                            <div key={i} className="db-4 gap-20">
                                <div className="card card-large shadow">
                                    <img src={folder("./"+items[nextId]["images"][0])} alt={items[nextId]["name"]} />
                                </div>
                                <div className="card-text">
                                    <div className="split-row">
                                        <h4>{items[nextId]["name"]}</h4>
                                        <h3>{items[nextId]["price"]}:-</h3>
                                    </div>
                                </div>
                                <p className="cap">{items[nextId]["gender"]}</p>
                            </div>
                        )
                    }
                </div>    
            </section>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        purchaseItem: (v) => { dispatch({type: "add", value: v}) },
        increasePrice: (v) => { dispatch({type: "increase", value: v}) }
    }
}

export default connect(null, mapDispatchToProps)(Item);