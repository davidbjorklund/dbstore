import React from 'react';

import "./controls.css";

const Controls = ({down, up}) => {
    return (
        <div className="controls">
            {/* Need button left+right components */}
            <div className="left" onClick={()=>down()}>
                <img src={require(`../../../assets/icons/angle-left.svg`)} alt="Left arrow angle icon"/>
            </div>
            <div className="right" onClick={()=>up()}>
                <img src={require(`../../../assets/icons/angle-right.svg`)} alt="Right arrow angle icon" />
            </div>
        </div>
    );
}


export default Controls;