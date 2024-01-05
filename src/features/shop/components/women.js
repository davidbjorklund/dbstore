import React from 'react';
import { connect } from 'react-redux';

import items from '../../../shared/utils/products/items.json';

import { TitleRow, ListDisabled, ListItems, ListPrice, Sort } from './sections';
import { filterDisabled, sortList } from './sections/utils';

const Women = ({ disabled, price, sort }) => {
    // place the items that should be displayed in list
    let list = sortList(
        Object.values(items).filter((item) => item.gender !== "men"), 
        0.5315, 
        11.1523, 
        sort
    );
    let total = list.length;
    
    // filter out disabled items and items too expensive
    
    list = filterDisabled(list, disabled, price);
    let amount = list.length;

    return <>
        <div className="split-row mb-40">
            <div>
                <h2>Women's Watches</h2>
                <br />
                <TitleRow amount={amount} total={total} name="Women" />
                <ListDisabled disabled={disabled} />
                <ListPrice price={price} />
            </div>
            <div className="sorting">
                <p className="p-10">Sort by:</p>
                <Sort />
            </div>
        </div>

        <ListItems list={list} seed={0.5315} rate={11.1523} />
    </>
}


const mapStateToProps = (state) => {
    return {
        disabled: [...Object.entries(state.filterReducer.data).map(([id,v]) => {
            if(id.includes("men") && !id.includes("women"))return null;
            if(!v.value)return v.name;
            return null;
        })].filter(v => v != null),
        price: 1000*2**state.filterReducer.price.value,
        sort: state.filterReducer.sort
    }
}

export default connect(mapStateToProps)(Women);