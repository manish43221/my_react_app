import { useState } from "react";

export default function Counter() {
    // var count = 0;
    const [count,setCount]=useState(0);
    
    function getChanged(){
        setCount(count=>count-2);
        
    }
    function handleIncrement() {
        setCount(count=>count+1);
        // count = count + 1;
        // console.log(count);
    }
    function handleDecrement() {
         setCount(count=>count-1);
        // count = count - 1;
        // console.log(count);
    }
    return (
        <div>
            <h2>Counter APP</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={getChanged}> change </button>
        </div>
    )
}