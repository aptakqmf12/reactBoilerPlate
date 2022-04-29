import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterSelector, counterAction } from '../store/modules/counter';

const useCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(counterSelector);

    const setCountUp = (num: number) => {
        dispatch(counterAction.setCountUp(num));
    };

    return { count, setCountUp };
};

export default useCounter;
