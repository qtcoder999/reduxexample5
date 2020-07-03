import React from "react";

export function Counter({ counter, increment, decrement }) {

    return (
        <>
            <h2>Hi I am Counter : {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )


}