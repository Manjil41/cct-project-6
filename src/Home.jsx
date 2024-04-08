import React, { useState } from 'react';

export default function Home() {
    const [number, setNumber] = useState(0);
    function increament() {
        setNumber(number + 1);
    }
    function m() {
        setNumber(number-1);
    }
    function reset() {
        setNumber(0);
    }
    return (
        <>
            <button onClick={increament}>Increase</button>
            <button onClick={m}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <p>{number}</p>
        </>
    );
}

//internal component and exteanal component