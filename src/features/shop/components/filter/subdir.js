import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { Checkbox } from './';

const Subdir = ({y, hidden, active, setActive}) => {

    const navigate = useNavigate();

    const [link, setLink] = useState(y.link);

    const toggleOpen = () => {
        if(!active){
            setActive();
            y.link && navigate(link);
        }else if(active) {
            setActive(-1);
        }
        // useless
        else setLink(link);
    }

    return (
        <div className={active?"subdir active":"subdir"} hidden={hidden}>
            <div className="inner jc-spaceb" onClick={() => toggleOpen()}>
                <p>{y.name}</p>
                <div className="right-icon">
                {active 
                    ? <img src={require(`../../../../assets/icons/angle-down.svg`)} alt="Down arrow angle icon" /> 
                    : <img src={require(`../../../../assets/icons/angle-right-grey.svg`)} alt="Right arrow angle icon" />}
                </div>
            </div>
            
            {y.children && y.children.map((z,i) =>
            z.type === "checkbox" ? <Checkbox key={z.name} z={z} hidden={!active} />
            :
            <></>
        )}
        </div>
    )
}


export default connect()(Subdir);