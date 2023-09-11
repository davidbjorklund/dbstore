import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Breadcrumbs } from '../../shared/components';

import items from '../../shared/utils/products/items.json';
//import men from '../../shared/utils/products/men.json';
//import women from '../../shared/utils/products/women.json';

const Item = () => {
    const navigate = useNavigate();
    const id = useParams("id")["id"];

    const [item, setItem] = useState({"images": [],"name": "", "price": 0});
    const [current, setCurrent] = useState(-1);

    const changeImage = (next) => {
        setCurrent(c => next);
    }

    let folder = require.context(`../../assets/images/products/`, true);

    useEffect(()=>{
        let exists = Object.entries(items).find(([item_name,item]) => item_name === id) != null;
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


    return (
        <>
            <Breadcrumbs path={path}/>
            <div className="row mb-40">
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
                    <h2>{item["price"]}:-</h2>
                    <hr></hr>
                    <div className="row mt-20">
                        <div className="db-6">
                            <p>Available Size</p>
                            <div>

                            </div>
                        </div>
                        <div className="db-6">
                            <p>Available Color</p>
                            <div>

                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <p><strong>Few in storage</strong> - get one now!</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;