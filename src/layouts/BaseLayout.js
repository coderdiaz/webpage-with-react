import React from 'react';
import Navigation from '../components/Navigation';

const BaseLayout = ({ children }) => (
    <>
        <Navigation />
        <main className="main">
            {children}
        </main>
        <footer className="footer"></footer>
    </>
);

export default BaseLayout;
