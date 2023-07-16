import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumbs } from '../../shared/components';

const Item = () => {
    const path = [
        {
            name:"Browse Products",
            link:"/shop"
        },
        {
            name:"Women",
            link:"/shop/women"
        },
        {
            active:true,
            name:"Jackets",
            link:"/shop/jackets"
        }
    ];


    return (
        <>
            <Breadcrumbs path={path}/>
            <div className="row mb-40">
                <div className="db-6 gap-40">
                    <div className="row">
                        <div className="db-12">
                            <div className="card card-large mb-10"></div>
                        </div>
                        <div className="db-3 gap-10">
                            <div className="card card-extra-small"></div>
                        </div>
                        <div className="db-3 gap-10">
                            <div className="card card-extra-small"></div>
                        </div>
                        <div className="db-3 gap-10">
                            <div className="card card-extra-small"></div>
                        </div>
                        <div className="db-3 gap-10">
                            <div className="card card-extra-small"></div>
                        </div>
                    </div>
                </div>
                <div className="db-6 gap-40">
                    <h2>Blazer Jacket</h2>
                    <h2>$2500</h2>
                    <hr></hr>
                    <div className="row mt-20">
                        <div className="db-6">
                            <p>Available Size</p>
                            <div>

                            </div>
                        </div>
                        <div className="db-6">
                            <p>Available Color</p>
                            <div>

                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <p><strong>Few in storage</strong> - get one now!</p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;