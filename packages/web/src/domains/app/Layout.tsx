import React from 'react';
import { Helmet } from 'react-helmet';

import { GlobalSEO } from '@nerve/domains/seo';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { StylesGlobal, FontDefinitions } from './styles';

// CSS Reset
import '@nerve/assets/reset.css';

export const Layout: React.FC = ({ children }) => (
    <>
        <GlobalSEO />

        <StylesGlobal />
        <Helmet>
            <style>{FontDefinitions}</style>
        </Helmet>

        <Header />
        <main>{children}</main>
        <Footer />
    </>
);
