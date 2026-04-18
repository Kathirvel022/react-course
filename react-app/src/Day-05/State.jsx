import { useState } from "react";

function State(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count - 1)}>decress</button>
            <button onClick={() => setCount(count + 1)}>incress</button>
        </div>
    );
}
export default State