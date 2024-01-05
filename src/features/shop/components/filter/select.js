import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Option } from './';

const Select = ({x, sort}) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(o => !o);
    }

    return (
        <>
            <div className={open?"select open":"select"}>
                <div className="inner jc-spaceb" onClick={() => toggleOpen()}>
                    <p>{x.children[sort.value].name}</p>
                    <div className="right-icon">
                    {open 
                        ? <img src={require(`../../../../assets/icons/angle-down.svg`)} alt="Down arrow angle icon" /> 
                        : <img src={require(`../../../../assets/icons/angle-right-grey.svg`)} alt="Right arrow angle icon" />}
                    </div>
                </div>
                {x.children && x.children.map((y,i) =>
                    y.type === "option" ? <Option key={y.name} id={i} z={y} close={toggleOpen} hidden={!open} />
                    :
                    <></>
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        sort: state.filterReducer.sort
    }
}

export default connect(mapStateToProps)(Select);