import React, { FC } from 'react';
import Counter from '@component/Counter';
import Content from '@pages/Layout/content';

const CounterPage: FC = () => {
    return (
        <>
            <Content title='Home'>
                <div>home content</div>
                <div>home content</div>
                <div>home content</div>
            </Content>
        </>
    );
};

export default CounterPage;
