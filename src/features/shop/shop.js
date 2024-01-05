import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Breadcrumbs } from '../../shared/components';
import { Filter }  from './components/filter/';

import filters from './utils/filters.js';

import "./shop.css";

const Shop = (props) => {
    // Page for item shop
    // Provides structure for filter and different types (all-items,women,men,most-wanted)

    
    const location = useLocation();
    // boolean, page is "men", page is "women"
    let men = location.pathname.split("/").find((el)=>el === "men") != null;
    let women = location.pathname.split("/").find((el)=>el === "women") != null;

    // Path for breadcrumbs
    const path = [
        {
            name:"Home",
            link:"/"
        },
        {
            active: !(men || women),
            name:"Browse Products",
            link:"/shop"
        },
        ...(men) ? [{
            active: true,
            name:"Men",
            link:"/shop/men"
        }] : [],
        ...(women) ? [{
            active: true,
            name:"Women",
            link:"/shop/women"
        }] : []
    ];


    return (
        <>
            <Breadcrumbs path={path}/>
            <div className="page">
                <aside id="filter">
                    <Filter filter={filters} />
                </aside>
                <main id="results">
                    <Outlet />
                </main>
            </div>
        </>
    );
}




export { Shop };