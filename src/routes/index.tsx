import { lazy, FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import ChartPage from '../pages/Chart';
import CounterPage from '../pages/Counter';

const RenderRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='chart' element={<ChartPage />}></Route>
            <Route path='counter' element={<CounterPage />}></Route>
        </Routes>
    );
};

export default RenderRouter;
