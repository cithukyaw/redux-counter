import {useDispatch, useSelector} from "react-redux";
import {clear} from "../state/history/historySlice";

const History = () => {
    const history = useSelector((state) => state.history.list);
    const loading = useSelector((state) => state.history.loading);
    const dispatch = useDispatch();

    return (
        <div className="card">
            <h2>History</h2>
            {history.length === 0 && <p>No history yet</p>}
            {history.map((item, index) => (
                <div className="row" key={index}>{item}</div>
            ))}
            {loading && <p>saving history ...</p>}
            <button onClick={() => dispatch(clear())}>Clear</button>
        </div>
    );
};

export default History;
