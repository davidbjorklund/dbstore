import React from "react";
import { connect } from "react-redux";

import items from '../../../shared/utils/products/items.json';

import { ListDisabled, TitleRow, ListItems, ListPrice, Sort } from './sections';
import { filterDisabled, sortList } from './sections/utils';

const MostWanted = ({ disabled, price, sort }) => {
    // place the items that should be displayed in list
    let list = sortList(Object.values(items), 0.5315, 1.9313, sort);
    let total = list.length;
    
    // filter out disabled items and items too expensive
    
    disabled = disabled.filter(el => el !== "Classic" && el !== "Durability");
    list = filterDisabled(list, disabled, price);
    let amount = list.length;

    return <>
        <div className="split-row mb-40">
            <div>
                <h2 className={"m-0"}>Most Wanted</h2>
                <br />
                <TitleRow amount={amount} total={total} name={null} />
                <ListDisabled disabled={disabled} />
                <ListPrice price={price} />
            </div>
            <div className="sorting">
                <p className="p-10">Sort by:</p>
                <Sort />
            </div>
        </div>

        <ListItems list={list} />
    </>
}

const mapStateToProps = (state) => {
    return {
        disabled: [...Object.entries(state.filterReducer.data).map(([id,v]) => {
            if(!v.value)return v.name;
            return null;
        })].filter(v => v != null),
        price: 1000*2**state.filterReducer.price.value,
        sort: state.filterReducer.sort
    }
}

export default connect(mapStateToProps)(MostWanted);