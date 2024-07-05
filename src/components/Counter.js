import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, decrementByAmount, reset} from "../state/counter/counterSlice";
import {saveHistoryAsync} from "../state/history/historySlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(saveHistoryAsync(count));
    };

    return (
        <div className="card">
            <h1>{count}</h1>
            <p>
                <button className="success" onClick={() => dispatch(increment())}>Increment</button>
                <button className="danger" onClick={() => dispatch(decrement())}>Decrement</button>
            </p>
            <p>
                <button className="success" onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
                <button className="danger" onClick={() => dispatch(decrementByAmount(10))}>Decrement By 10</button>
            </p>
            <p>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button className="primary" onClick={handleSubmit}>Submit</button>
            </p>
        </div>
    );
};

export default Counter;
