import React from 'react';

import items from '../../../shared/utils/products/items.json';

import { Card } from './';

const AllItems = () => {
    let list = Object.entries(items).sort(([A,a],[B,b])=>a["price"] - b["price"]);

    let seed = 0.5315;
    let rate = 1.8313;
    return (
        <>
            <h2>All Items</h2>
            <div className="list-row jc-spaceb">
                {
                    list.map(([_,item]) =>
                        <Card key={item["id"]} item={item} />
                    ).sort(() => {
                        seed = (seed * rate + 1) % 1;
                        return seed - 0.5;
                    })
                }
                <div className="db-4 gap-20"></div>
            </div>
        </>
    )
}

export default AllItems;