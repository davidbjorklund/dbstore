import React from 'react';
import { Link } from 'react-router-dom';

import "./breadcrumbs.css";

const Breadcrumbs = ({path}) => {
    return (
        <>
            <div className="breadcrumbs">
                <p>
                {
                    path.map((x,i)=>{
                        let cn = x.active?"active":"";
                        return <Link key={2*i+1} to={x.link} className={cn}>{i !== 0 && <span> &gt; </span>}{x.name}</Link>
                    })
                }
                </p>
            </div>
        </>
    )
}

export default Breadcrumbs;