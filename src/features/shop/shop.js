import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Breadcrumbs } from '../../shared/components';
import { Filter }  from './components';

import filters from './utils/filters.js';

import "./shop.css";

const Shop = (props) => {
    const location = useLocation();

    let men = location.pathname.split("/").find((el)=>el === "men") != null;
    let women = location.pathname.split("/").find((el)=>el === "women") != null;
    const path = [
        {
            name:"Home",
            link:"/"
        },
        {
            active: !(men || women),
            name:"Browse Products",
            link:"/shop"
        }
    ];
    if(men){
        path.push({
            active: true,
            name:"Men",
            link:"/shop/men"
        })
    }
    if(women){
        path.push({
            active: true,
            name:"Women",
            link:"/shop/women"
        })
    }


    

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