import React, { useState, useMemo, useCallback, ChangeEvent } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import GlobalStyle from './styles';

import ChartPage from './pages/Chart';
import CounterPage from './pages/Counter';

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <Routes>
                <Route path='chart' element={<ChartPage />}></Route>
                <Route path='counter' element={<CounterPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
