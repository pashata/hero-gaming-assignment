import { useState, useEffect } from "react";
import { fetchStopwatch, addLap, addToggle } from '../services';

function useSingleStopwatch(id) {
    /** @type {[Stopwatch, React.Dispatch<React.SetStateAction<Stopwatch>>]} */
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
      setIsLoading(true);
      fetchStopwatch(id).then((result) => {
        setData(result);
        setIsLoading(false);
      })
    }

    const addLapHandler = () => {
      addLap(id);
      setData(oldData => setData({
        ...oldData,
        laps: [
          ...oldData.laps,
          Date.now()
        ]
      }))
    }

    const toggleStopWatchHandler = (timestamp) => {
      addToggle(id);
      setData(oldData => setData({
        ...oldData,
        toggles: [
          ...oldData.toggles,
          Date.now()
        ]
      }))
    }

    useEffect(fetchData, [id]);

    return {
        data,
        isLoading: !data || isLoading,
        toggleStopWatchHandler,
        addLapHandler
    };
}

export default useSingleStopwatch;
