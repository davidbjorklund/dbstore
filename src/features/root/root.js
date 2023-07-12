import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../shared/layout/header';
import Footer from '../../shared/layout/footer';

const Root = (props) => {


    return (
        <>
            <Header />
            <div id="main">
                { <Outlet />  || <h1>ABC</h1> }
            </div>
            <Footer />
        </>
    );
}

export default Root;