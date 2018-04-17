import React, { Fragment } from 'react';
import './Layout.css';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => (
    <Fragment>
        <h2>Header</h2>
            <main className="Content">
                { props.children }
            </main>
        <Footer />
    </Fragment>
);

export default Layout;