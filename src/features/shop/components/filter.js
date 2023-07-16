import React, { useState } from 'react';

import "./filter.css";

const Filter = ({filter}) => {
    return (
        <>
            {filter.map(x =>
                x.type === "dir" ? <Dir key={x.name} x={x}/>
                :
                x.type === "subdir" ? <Subdir key={x.name} y={x}/>
                :
                x.type === "checkbox" ? <Checkbox key={x.name} z={x}/>
                :
                <></>
            )}
        </>
    );
}

const Dir = ({x}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(o => !o);
    }

    return (
        <>
            <div className={open?"dir open":"dir"}>
                <div className="inner" onClick={() => toggleOpen()}>
                    <p>{x.name}</p>
                </div>
                {x.children && x.children.map(y =>
                    y.type === "subdir" ? <Subdir key={y.name} y={y} hidden={!open}/>
                    :
                    y.type === "checkbox" ? <Checkbox key={y.name} z={y} hidden={!open}/>
                    :
                    <></>
                )}
            </div>
            <div className="split"></div>
        </>
    )
}

const Subdir = ({y, hidden}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(o => !o);
    }

    return (
        <div className={open?"subdir open":"subdir"} hidden={hidden}>
            <div className="inner" onClick={() => toggleOpen()}>
                <p>{y.name}</p>
            </div>
            {y.children && y.children.map(z =>
                z.type === "checkbox" ? <Checkbox key={z.name} z={z} hidden={!open}/>
                :
                <></>
            )}
        </div>
    )
}

const Checkbox = ({z, hidden}) => {
    const [checked, setChecked] = useState(z.checked);

    const toggleChecked = () => {
        setChecked(c => !c);
    }

    return (
        <div className="checkbox" hidden={hidden}>   
            <div className="inner row jc-left" onClick={()=>toggleChecked()}>
                <input type="checkbox" checked={checked} onChange={()=>null}></input> <p>{z.name}</p>
            </div>
        </div>
    )
}

export default Filter;