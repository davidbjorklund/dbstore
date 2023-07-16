import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumbs } from '../../shared/components';
import { Filter } from './components';

import filters from './utils/filters.js';

import "./shop.css";

const Shop = (props) => {
    const path = [
        {
            name:"Home",
            link:"../"
        },
        {
            active:true,
            name:"Browse Products",
            link:"."
        }
    ];

    

    return (
        <>
            <Breadcrumbs path={path}/>
            <div className="page">
                <aside id="filter">
                    <Filter filter={filters} />
                </aside>
                <main id="results">
                    <div className="split-row">
                        <p>Showing <strong>9</strong> results from total <strong>37</strong> for <strong>"tops"</strong></p>
                        <div>
                            <p>Sort by </p>
                        </div>
                    </div>
                    <div className="mt-40 split-row jc-left ai-center">
                        <p>Applied filters: </p>
                    </div>
                    <div className="list-row jc-spaceb">
                        {Array(12).fill(0).map(
                            (x,i)=><div key={i} className="db-4 gap-20 mb-40"><Link to="/item/title-of-thing">
                                <div className="card card-large">
                                
                                </div>
                                <div className="card-text">
                                    <div className="split-row">
                                        <h4>Title of thing</h4>
                                        <h3>23$</h3>
                                    </div>
                                </div>
                                <p>3 Colors</p>
                            </Link></div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Shop;