// useCallback -> Hooks
// memo, closure, useCallback
import React, { useCallback, useState }  from "react";
import Inc from './Inc.js';


export default function Counter() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(['User 1', 'User 2', 'User 3']);

    const addData = useCallback(() => {
        setData((d) => [...d, "user 4"]);
    }, [data]);

    return (
        <>
          <Inc data={data} addData={addData}/>
          Total Count: {count}
          <button onClick={() => setCount(count + 1)}> Add </button>
        </>
    )
}

// import React, { useCallback } from "react";


// class Counter() {
    
// }