import React, { FC } from 'react';

import { StyledWapper } from './style';
import Header from '../header';
import Footer from '../footer';

interface Props {
    title?: string;
    children?: JSX.Element | JSX.Element[];
}

const Content: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Header />
            {title && <h2>{title}</h2>}
            {children}
            <Footer />
        </>
    );
};

export default Content;
