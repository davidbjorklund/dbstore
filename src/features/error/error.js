import React from 'react';

import Header from '../../shared/layout/header';
import Footer from '../../shared/layout/footer';

const Error = (props) => {
    // 404 - Page for project
    // Displays when url is not specified in src/index.js


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