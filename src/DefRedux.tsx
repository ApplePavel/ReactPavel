import React from 'react'
import { countSelector, decrementAction, incrementAction, useAppDispatch, useAppSelector} from './defaultRedux'
function DefRedux() {
    
    const count = useAppSelector(countSelector)
    const dispatch = useAppDispatch()
  
    const onDecrement = () => {
      dispatch(decrementAction)
    }
  
    const onIncrement = () => {
      dispatch(incrementAction)
    }
  
  
    return (
      <>
       <h1>Текущее кол-во задач: {count}</h1>
       <button onClick={onIncrement}>+</button>
       <button onClick={onDecrement}>-</button>
        
      </>
    )
}

export default DefRedux