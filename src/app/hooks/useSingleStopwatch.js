import { useState, useEffect, useCallback } from "react";
import { fetchStopwatch, addLap, addToggle } from '../services';
import { useCounter } from '../hooks';

function useSingleStopwatch(id) {
    /** @type {[Stopwatch, React.Dispatch<React.SetStateAction<Stopwatch>>]} */
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { displayTime, isRunning, time } = useCounter(data);

    const fetchData = useCallback(() => {
      setIsLoading(true);
      fetchStopwatch(id).then((result) => {
        setData(result);
        setIsLoading(false);
      })
    }, [id])

    const addLapHandler = () => {
      setIsLoading(true);
      addLap(id).then(() => {
        setIsLoading(false);
      });
      setData(oldData => setData({
        ...oldData,
        laps: [
          ...oldData.laps,
          time
        ]
      }))
    }

    const toggleStopWatchHandler = (timestamp) => {
      setIsLoading(true);
      addToggle(id).finally(() => {
        setIsLoading(false);
      });
      setData(oldData => setData({
        ...oldData,
        toggles: [
          ...oldData.toggles,
          data.started + time
        ]
      }))
    }

    useEffect(fetchData, [id]);

    return {
        data,
        isLoading: !data || isLoading,
        displayTime,
        isRunning,
        toggleStopWatchHandler,
        addLapHandler
    };
}

export default useSingleStopwatch;
