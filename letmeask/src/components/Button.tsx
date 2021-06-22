import { useState } from "react";

/* TIPAGEM (typescript)
type ButtonProps = {
    children?: string;
}
*/
export function Button() {

    const [counter, setCounter] = useState(0)
    //let counter = 0;

    function increment() {
        //counter += 1;
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}

