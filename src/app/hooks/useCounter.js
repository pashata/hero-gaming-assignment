import { useState, useEffect, useMemo } from "react";
import { calculateStopwatchTime } from '../utils';

function useCounter(stopwatch) {
    const [time, setTime] = useState(0);    

    const { isRunning, totalTime } = useMemo(
        () => (
            stopwatch
                ? calculateStopwatchTime(stopwatch)
                : { isRunning: false, totalTime: 0 }
        ),
        [stopwatch]
    );

    useEffect(() => {
        setTime(0);

        if (!isRunning) return;

        const startTimestamp = Date.now();

        const interval = setInterval(() => {
            setTime(Date.now() - startTimestamp);
        }, 14);

        return () => clearInterval(interval);
    }, [stopwatch]);

    return {
        time: totalTime+time,
        isRunning
    };
}

export default useCounter;
