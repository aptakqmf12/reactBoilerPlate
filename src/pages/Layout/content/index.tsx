import React, { FC } from 'react';

import Header from '../header';
import Footer from '../footer';

interface Props {
    title: string;
    children: JSX.Element;
}

const Content: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Header />
            <h2>{title}</h2>
            {children}
            <Footer />
        </>
    );
};

export default Content;
