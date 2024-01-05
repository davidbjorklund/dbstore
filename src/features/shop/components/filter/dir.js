import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Checkbox, Label, Range, Subdir } from './';

const Dir = ({x}) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);

    const toggleOpen = () => {
        setOpen(o => !o);
    }

    const handleActive = (i) => {
        setActive(_ => i);
    }



    return (
        <>
            <div className={open?"dir open":"dir"}>
                <div className="inner jc-spaceb" onClick={() => toggleOpen()}>
                    <p>{x.name}</p>
                    <div className="right-icon">
                    {open 
                        ? <img src={require(`../../../../assets/icons/angle-down.svg`)} alt="Down arrow angle icon" /> 
                        : <img src={require(`../../../../assets/icons/angle-right-grey.svg`)} alt="Right arrow angle icon" />}
                    </div>
                </div>
                {x.children && x.children.map((y,i) =>
                    y.type === "subdir" ? <Subdir key={y.name} y={y} hidden={!open} active={active===i} setActive={(x=i)=>handleActive(x)}/>
                    :
                    y.type === "checkbox" ? <Checkbox key={y.name} z={y} hidden={!open}/>
                    :
                    y.type === "label" ? <Label key={y.name} z={y} hidden={!open}/>
                    :
                    y.type === "range" ? <Range key={y.name} z={y} hidden={!open} />
                    :
                    <></>
                )}
            </div>
            <div className="split"></div>
        </>
    )
}

export default connect()(Dir);