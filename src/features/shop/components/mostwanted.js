import React from "react";

import items from '../../../shared/utils/products/items.json';

import { Card } from './';

const MostWanted = () => {
    let list = Object.entries(items).sort(([A,a],[B,b])=>b["price"] - a["price"]);

    let seed = 0.5315;

    return (
        <>
            <h2>Most Wanted</h2>
            <div className="list-row jc-spaceb">
                {
                    list.map(([_,item]) =>
                        <Card key={item["id"]} item={item} />
                    ).sort(() => {
                        seed = (seed * 1.8313 + 1) % 1;
                        return seed - 0.5;
                    })
                }
                <div className="db-4 gap-20 mb-40"></div>
            </div>
        </>
    )
}

export default MostWanted;