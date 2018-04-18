import React, { Fragment } from 'react';
import './Layout.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Layout = (props) => (
    <Fragment>
            <Header />
            <main className="Content">
                { props.children }
            </main>
        <Footer />
    </Fragment>
);

export default Layout;