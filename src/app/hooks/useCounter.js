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
            const intervalTime = Math.floor(Math.random() * 10);
            interval = setInterval(() => {
                setTime(oldTime => oldTime + intervalTime);
            }, intervalTime);
        } else {
            setTime(0);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    return {
        time: totalTime+time,
        displayTime: formatTimestamp(totalTime+time),
        isRunning
    };
}

export default useCounter;
