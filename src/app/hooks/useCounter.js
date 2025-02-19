import { useState, useEffect, useMemo } from "react";
import { calculateStopwatchTime, formatTimestamp } from '../utils';

function useCounter(stopwatch) {
    const [time, setTime] = useState(0);

    const { isRunning, totalTime } = useMemo(
        () => {
            if (stopwatch) {
                return calculateStopwatchTime(stopwatch);
            }
            return {
                isRunning: false,
                totalTime: 0
            }
        },
        [stopwatch]
    );

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

    return {
        time,
        totalTime,
        displayTime: formatTimestamp(totalTime+time),
        isRunning
    };
}

export default useCounter;
