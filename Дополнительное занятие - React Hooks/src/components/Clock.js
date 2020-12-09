import React, { useState, useEffect, useRef } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    const intervalId = useRef();

    useEffect(() => {
        console.log('useEffect');
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            console.log('clearing before next useEffect');
            clearInterval(intervalId.current);
        };
    }, []);

    const stop = () => {
        clearInterval(intervalId.current);
    };

    return (
        <div>
            <p>Current time: {time.toLocaleTimeString()}</p>
            <button onClick={stop}>Stop</button>
        </div>
    );
}
