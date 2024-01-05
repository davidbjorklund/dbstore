import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from '../../shared/layout/header';
import Footer from '../../shared/layout/footer';

const Root = (props) => {


    // Create structure for entire project
    return (
        <>
            <ScrollRestoration />
            <Header />
            <div id="main">
                { <Outlet />  || <h1>DBStore</h1> }
            </div>
            <Footer />
        </>
    );
}

export default Root;