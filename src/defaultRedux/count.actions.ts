export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

interface incrementAction{
    type: typeof INCREMENT
}

interface decrementAction{
    type: typeof DECREMENT
}

export const incrementAction: incrementAction ={
        type: INCREMENT
}

export const decrementAction: decrementAction = {
        type: DECREMENT
}


export type countActions = incrementAction | decrementAction