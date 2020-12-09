import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('document.title useEffect');
        document.title = `You clicked ${count} times`;
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        console.log(textValue);
    }, [textValue]);

    const handleChange = e => {
        setTextValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={textValue} onChange={handleChange} />
            <p>You clicked {count} times</p>
            <button type="button" onClick={handleIncrement}>
                Increment counter
            </button>
        </div>
    );
};

export default Counter;
