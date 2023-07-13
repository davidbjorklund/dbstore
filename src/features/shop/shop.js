import React from 'react';

import { Breadcrumbs } from './components';

const Shop = (props) => {


    return (
        <>
            <Breadcrumbs path={[{name:"Home",link:"../"},{active:true,name:"Browse Products",link:"./"}]}/>
            <h1>Shop</h1>
        </>
    );
}

export default Shop;