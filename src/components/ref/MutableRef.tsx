import React, {useEffect, useRef, useState} from 'react';

const MutableRef = () => {

    const [timer, setTimer] = useState(0);
    const [isInterval, setIsInterval] = useState(false);
    const interValRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (interValRef.current) clearInterval(interValRef.current)
        setIsInterval(false);
    }

    const startTimer = () => {
        if (isInterval) return;
        interValRef.current = setInterval(() => {
            setTimer((timer) => timer+1)
        }, 1000)
        setIsInterval(true);
    }

    useEffect(() => {
        startTimer();
        return () => {
            stopTimer();
        }
    }, [])

    return (
        <div>
            HookTimer - {timer}
            <button onClick={() => startTimer()}>Start timer</button>
            <button onClick={() => stopTimer()}>Stop timer</button>
        </div>
    );
};

export default MutableRef;