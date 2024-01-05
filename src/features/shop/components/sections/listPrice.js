import React from 'react';

const ListPrice = ({ price }) => {
    return (<>
        {// list disabled items
            price !== 64000 &&
            <div className="split-row jc-left ai-center">
                <br />
                <p>Max Price: <strong>{price}</strong>:-</p>
            </div>
        }
    </>)
}

export default ListPrice;