import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from './';

const ListItems = ({ list }) => {
    // Takes list of items and returns a list of cards

    if(list.length === 0){
        return (
        <div className="db-4 gap-20 mb-40">
            <Link to="/shop">
                <div className="card-text">
                    <h4>No Results</h4>
                </div>
            </Link>
        </div>
        )
    }

    return (
        <div className="list-row list-products jc-left g-20">
            {
                list.map((item) => {
                    return <Card key={item["id"]} item={item} disabled={false}/>
                })
            }
            {
                // fill out remainding cards on last row
                list.length % 3 === 2 ? <div className="db-4 gap-20"></div> :
                list.length % 3 === 1 ? <><div className="db-4 gap-20"></div><div className="db-4 gap-20"></div></> :
                null
            }
        </div>
    )
}

export default ListItems;