import React, { Fragment } from 'react';
import './Layout.css';

const Layout = (props) => (
    <Fragment>
        <h2>Header</h2>
            <main className="Content">
                { props.children }
            </main>
        <h2>Footer</h2>
    </Fragment>
);

export default Layout;