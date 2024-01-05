import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useSearchParams, useNavigate  } from 'react-router-dom'

import Header from '../../shared/layout/header';
import Footer from '../../shared/layout/footer';

const Root = (props) => {
    const navigate = useNavigate();

    let [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        if(searchParams.get("location") !== undefined){
            switch(searchParams.get("location")){
                case "/dbstore/":
                    navigate("/dbstore");
                    break;
                case "/dbstore/shop/":
                    navigate("/dbstore/shop");
                    break;
                case "/dbstore/shop/most-wanted":
                    navigate("/dbstore/shop/most-wanted");
                    break;
                case "/dbstore/shop/women":
                    navigate("/dbstore/shop/women");
                    break;
                case "/dbstore/shop/men":
                    navigate("/dbstore/shop/men");
                    break;
                case "/dbstore/cart":
                    navigate("/dbstore/cart");
                    break;
                default:
                    setSearchParams(s => s);
                    navigate("/dbstore/shop");
            }
        }
    }, [])


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