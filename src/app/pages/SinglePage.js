/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { FiArrowLeft } from "react-icons/fi";
import * as React from 'react'
import { useParams } from 'react-router-dom';
import {
  MainCounter,
  AppWrapper,
  AppMainArea,
  StopwatchLaps,
  StopwatchButton,
  StyledLink,
  StopwatchLoader
} from '../components';
import { useSingleStopwatch, useCounter } from '../hooks';

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
    toggleStopWatchHandler,
    addLapHandler
  } = useSingleStopwatch(id);
  const { time, isRunning } = useCounter(data);

  return (
    <AppWrapper>
      <StyledLink to='/'>
        <FiArrowLeft />
        Back to the list
      </StyledLink>
      <MainCounter timestamp={time} />
      {!isLoading && (
        <>
          <TogglesWrapper>
            <StopwatchButton
                onClick={toggleStopWatchHandler}
                theme={isRunning ? 'danger' : 'success'}
            >{isRunning ? 'Pause' : 'Resume'}</StopwatchButton>
            {isRunning && (
              <StopwatchButton onClick={addLapHandler}>Lap</StopwatchButton>
            )}
          </TogglesWrapper>
          <AppMainArea>
            <StopwatchLaps stopwatch={data} />
          </AppMainArea>
        </>
      )}
      {isLoading && (
        <AppMainArea>
          <StopwatchLoader />
        </AppMainArea>
      )}
    </AppWrapper>
  )
}
