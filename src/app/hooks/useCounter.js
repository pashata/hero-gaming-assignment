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
        if (!isRunning) {
            setTime(0);
            return () => {};
        }
    
        const interval = setInterval(() => {
            const { toggles, started } = stopwatch;
            setTime(Date.now() - (toggles[toggles.length - 1] ?? started));
        }, 14);
    
        return () => clearInterval(interval);
    }, [isRunning]);

    return {
        time: totalTime+time,
        isRunning
    };
}

export default useCounter;
