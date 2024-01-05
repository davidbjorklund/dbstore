import React from 'react';

const ListItems = ({amount, total, name}) => {
    return (<>
        <p>Showing 
            <strong> {amount}</strong> results of 
            <strong> {total}</strong> total {name && <>for <strong>{name}</strong></>}
        </p>
    </>)
}

export default ListItems;