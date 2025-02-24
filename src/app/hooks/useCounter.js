import { useState, useEffect, useMemo } from "react";
import { calculateStopwatchTime, formatTimestamp } from '../utils';

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
        if (!isRunning) {
            setTime(0);
            return () => {};
        }
    
        const interval = setInterval(() => {
            const { toggles } = stopwatch;
            setTime(Date.now() - toggles[toggles.length - 1]);
        }, 14);
    
        return () => clearInterval(interval);
    }, [isRunning]);

    return {
        time: totalTime+time,
        displayTime: formatTimestamp(totalTime+time),
        isRunning
    };
}

export default useCounter;
