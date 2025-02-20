/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as React from 'react'
import { useParams } from 'react-router-dom';
import {
  MainCounter,
  AppWrapper,
  AppMainArea,
  StopwatchLaps,
  StopwatchButton
} from '../components';
import { useSingleStopwatch } from '../hooks';

const TogglesWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

export default function SinglePage() {
  const { id } = useParams();
  const {
    data,
    isLoading,
    displayTime,
    isRunning,
    toggleStopWatchHandler,
    addLapHandler
  } = useSingleStopwatch(id);

  return (
    <AppWrapper>
      <MainCounter displayTime={displayTime} />
      {!isLoading && (
        <AppMainArea>
          <TogglesWrapper>
            <StopwatchButton onClick={addLapHandler}>Lap</StopwatchButton>
            <StopwatchButton
                onClick={toggleStopWatchHandler}
                theme={isRunning ? 'danger' : 'success'}
            >{isRunning ? 'Pause' : 'Resume'}</StopwatchButton>
          </TogglesWrapper>
          <StopwatchLaps stopwatch={data} />
        </AppMainArea>
      )}
    </AppWrapper>
  )
}
