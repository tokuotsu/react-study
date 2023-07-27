import { useState } from 'react';


export default function Test() {
    const [count, setCount] = useState(0);

    function handleClick() {
        // alert('You clicked me!')
        setCount(count + 1);
    }
    return (
        <>
            <Button/>
            <Button/>
        </>
    )
}

function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        // alert('You clicked me!')
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick}>
            click me {count} times
        </button>
    )
}