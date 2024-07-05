import './App.css';
import Counter from "./components/Counter";
import History from "./components/History";

function App() {
    return (
        <div className="App">
            <h1>Redux Simple App</h1>
            <div className="container">
                <Counter />
                <History />
            </div>
        </div>
    );
}

export default App;
