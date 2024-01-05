import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item, disabled}) => {
    if(disabled)return <></>
    
    let folder = require.context(`../../../../assets/images/products/`, true);
    let image = folder("./"+item["images"][0]);

    return (
        <div key={item["name"]} className="db-4 gap-20 mb-40">
            <Link to={`/item/${item["id"]}`}>
                <div className="card card-large shadow">
                    <img src={image} alt={item["name"]} />
                </div>
                <div className="card-text">
                    <div className="split-row">
                        <h4>{item["name"]}</h4>
                        <h3>{item["price"]}:-</h3>
                    </div>
                </div>
                <p className="cap">{item["gender"]}</p>
            </Link>
        </div>
    )
}

export default Card;