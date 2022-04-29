import React, { useState, useMemo, useCallback, ChangeEvent } from 'react';
import useCounter from './hooks/useCounter';

function App() {
    const { count, setCountUp } = useCounter();
    return (
        <div className='App'>
            <div>
                counter : {count} <button onClick={() => setCountUp(1)}>add 1</button>
            </div>
        </div>
    );
}

export default App;
