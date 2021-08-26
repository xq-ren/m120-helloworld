import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function blubber() {
    return "blubber";
}

function App() {
    const[counter, setCounter]= useState(0)

    function buttonHandler() {
        console.log("Button was punched")
    }

    function counterPlus(){
        setCounter(counter+1)
        console.log(counter)
    }

    function counterMinus(){
        setCounter(counter-1)
        console.log(counter)
    }

    return (
        <div className="App">
            <header className="App-header">
                Hello World
                <button onClick={buttonHandler}>punch me, i beg you</button>
                {counter}
                <button onClick={counterPlus}>add</button>
                <button onClick={counterMinus}>subtract</button>
            </header>
        </div>
    );
}

export function MyComponent() {
    return (
        <div>MyComponent</div>
    )
}

export default App;
