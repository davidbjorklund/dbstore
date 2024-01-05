import React from 'react';

const ListDisabled = ({disabled}) => {
    return (<>
        {// list disabled items
            disabled.length !== 0 &&
            <div className="split-row jc-left ai-center">
                <br />
                <p>Applied filters: {
                    disabled.map((title,i) => 
                        <span key={i}>
                            <s>{title}</s>
                            {(i !== disabled.length-1) && ","} 
                        </span>
                    )
                }</p>
            </div>
        }
    </>)
}

export default ListDisabled;