import React, { FC } from 'react';
import Counter from '../../component/Counter';
import Content from '../Layout/content';

const CounterPage: FC = () => {
    return (
        <div>
            <Content title='카운터 페이지'>
                <Counter />
            </Content>
        </div>
    );
};

export default CounterPage;
