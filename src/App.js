import React from "react";
import { useState, useEffect } from "react";

import './App.css';

function App() {
    const [advices, setAdvices] = useState([]);

    useEffect(() => {
        fetchAdvices();
    }, []);

    const fetchAdvices = async () => {
        let url = "https://api.adviceslip.com/advice";
        const res = await fetch(url)
        const data = await res.json();
        setAdvices(data.slip.advice);
    }

    // Render
    return (
        <>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advices}</h1>
                    <button 
                        className="button"
                        onClick={fetchAdvices}
                    >
                        <span>
                            NEED SOME ADVICE?
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;