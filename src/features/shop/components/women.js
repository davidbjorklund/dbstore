import React from 'react';
import { useSearchParams } from 'react-router-dom';

import items from '../../../shared/utils/products/items.json';
import women from '../../../shared/utils/products/women.json';

import { Card } from './';

const Women = () => {
    const [searchParams] = useSearchParams();
    
    let params = ["durability"];


    let disabled = params.filter((param,i) => {
        /* go through params, 
        - check for param in url (fallback true)
        - if param is set to false, => then keen it in the list (true)
        - else remove from list (false)
        */
        return !(JSON.parse((searchParams.get(param) || true)));
    })



    /*
    log amount of shown results, as well as the total possible
    */
    let amount = 0;
    let total = 0;

    // place the items that should be displayed in list
    let list = [];
    women.map(category =>
        category["collections"].map(collection => 
            collection["variations"].map((variation) => {
                // add possible result
                total++;
                // check if this item is disabled
                if(disabled.includes(category["category"]))return 0;

                // add item to list to be displayed
                list.push(items[variation]);
                // log shown result
                amount++;

                return 0;
            })
        )
    )

    // seed and rate for displaying the results in a random but consistent order
    let seed = 0.5315;
    let rate = 11.1523;

    return <>
        <div className="split-row mb-40">
            <p>Showing <strong>{amount}</strong> results from total <strong>{total}</strong> for <strong>"women"</strong></p>
            <div>
                <p>Sort by </p>
            </div>
        </div>
        {
            // if any filters are disabled, list them
            disabled.length !== 0 &&
            <div className="split-row jc-left ai-center">
                <p>Applied filters: {disabled.map((title,i) => <span key={i}><s>{title}</s>{(i !== disabled.length-1) && ","} </span>)}</p>
            </div>
        }
        <div className="list-row jc-spaceb">
            {
                list.map((item) => {
                    return <Card key={item["id"]} item={item} disabled={false}/>
                }).sort(() => {
                    seed = (seed * rate + 1) % 1;
                    return seed - 0.5;
                })
            }
            <div className="db-4 gap-20 mb-40"></div>
        </div>
    </>
}

export default Women;