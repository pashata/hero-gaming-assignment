import { useState, useEffect, useMemo } from "react";
import { calculateStopwatchTime } from '../utils';

function useCounter(stopwatch) {
    const [time, setTime] = useState(0);

    const { isRunning, totalTime } = useMemo(() => calculateStopwatchTime(stopwatch), [stopwatch]);

    useEffect(() => {
        let interval;
        if (isRunning) {
            const intervalTime = Math.floor(Math.random() * 100);
            interval = setInterval(() => {
                setTime(oldTime => oldTime + intervalTime);
            }, intervalTime);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return { time, isRunning, totalTime };
}

export default useCounter;
