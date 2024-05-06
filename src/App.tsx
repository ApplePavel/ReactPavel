import { useAppDispatch, useAppSelector } from "./toolkitRedux/store";
import { decrement, increment, reset } from "./toolkitRedux/reducers/CounterSlice";

export default function App() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment(1))}> + </button>
      <button onClick={() => dispatch(decrement(1))}> - </button>
      <button onClick={() => dispatch(reset())}> Сброс </button>
    </div>
  );
}
