import React from 'react';

import "./controls.css";

const Controls = ({down, up}) => {
    return (
        <div className="controls">
            {/* Need button left+right components */}
            <div className="left" onClick={()=>down()}></div>
            <div className="right" onClick={()=>up()}></div>
        </div>
    );
}


export default Controls;