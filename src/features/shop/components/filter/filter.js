import React from 'react';
import { connect } from 'react-redux';

import "./filter.css";

import { Checkbox, Dir, Select, Subdir } from './';

const Filter = ({filter}) => {
    // Filter for shop, connected to redux

    // Turns a filter array into a component, of dir, subdir, select, and checkbox
    
    return (
        <>
            {filter.map(x =>
                x.type === "dir" ? <Dir key={x.name} x={x}/>
                :
                x.type === "subdir" ? <Subdir key={x.name} y={x}/>
                :
                x.type === "select" ? <Select key={x.name} x={x}/>
                :
                x.type === "checkbox" ? <Checkbox key={x.name} z={x} hidden={false} updateChecked={()=>{}}/>
                :
                <></>
            )}
        </>
    );
}


export default connect()(Filter);