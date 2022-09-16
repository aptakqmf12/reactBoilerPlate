import React, { FC } from 'react';
import Charts from '@component/Charts';
import Content from '@pages/Layout/content';
import ScssTest from '@component/Scss';

const ChartPage: FC = () => {
  return (
    <>
      <Content title='차트페이지'>
        <ScssTest />
        <Charts />
      </Content>
    </>
  );
};

export default ChartPage;
