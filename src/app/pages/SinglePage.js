import * as React from 'react'
import { useParams } from 'react-router-dom';
import { fetchStopwatch } from '../services';
import {
  MainCounter,
  AppWrapper,
  AppMainArea,
  SinglePageToggles,
  StopwatchLaps
} from '../components';
import { useCounter } from '../hooks';

export default function SinglePage() {
  const { id } = useParams();
  /** @type {[Stopwatch, React.Dispatch<React.SetStateAction<Stopwatch>>]} */
  const [data, setData] = React.useState(null);
  const { displayTime, isRunning } = useCounter(data);

  React.useEffect(() => {
    fetchStopwatch(id).then((result) => {
      setData(result);
    })
  }, [id]);

  if (!data) {
    return (
      <AppWrapper>
        Loading...
      </AppWrapper>
    )
  }

  return (
    <AppWrapper>
      <MainCounter displayTime={displayTime} />
      <AppMainArea>
        <SinglePageToggles stopwatchId={id} isRunning={isRunning} />
        <StopwatchLaps stopwatch={data} />
      </AppMainArea>
    </AppWrapper>
  )
}
