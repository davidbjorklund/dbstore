import React from 'react';

import Header from '../../shared/layout/header';
import Footer from '../../shared/layout/footer';

const Error = (props) => {


    return (
        <>
            <Header />
            <div id="main">
                <h1>404-Error, Page not found</h1>
            </div>
            <Footer />
        </>
    );
}

export default Error;