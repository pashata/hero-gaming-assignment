import { useState, useEffect } from "react";
import { toast } from 'react-toast';
import { fetchStopwatch, addLap, addToggle } from '../services';

function useSingleStopwatch(id) {
    /** @type {[Stopwatch, React.Dispatch<React.SetStateAction<Stopwatch>>]} */
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
      setIsLoading(true);

      fetchStopwatch(id)
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          toast.error(error);
          fetchData();
        })
        .finally(() => {
          setIsLoading(false);
        })
    }

    const updateData = (key, timestamp, rollback = false) => {
      setData(oldData => ({
        ...oldData,
        ...key === 'toggles' && {
          toggles: rollback
            ? oldData.toggles.slice(0, -1)
            : [...oldData.toggles, timestamp]
        },
        ...key === 'laps' && {
          laps: rollback
            ? oldData.laps.slice(0, -1)
            : [...oldData.laps, timestamp]
        }
      }))
    }

    const addLapHandler = () => {
      if (!isLoading) {
        setIsLoading(true);

        const timestamp = Date.now();
        updateData('laps', timestamp);

        addLap(id, timestamp)
          .catch(() => {
            toast.error(error);
            updateData('laps', timestamp, true);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }

    const toggleStopWatchHandler = () => {
      if (!isLoading) {
        setIsLoading(true);

        const timestamp = Date.now();
        updateData('toggles', timestamp);

        addToggle(id, Date.now())
          .catch((error) => {
            toast.error(error);
            updateData('toggles', timestamp, true);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
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
