/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as React from 'react';
import { StopwatchButton } from '../components';
import { addLap, addToggle } from '../services';

const SinglePageTogglesWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

/**
 * @param {Object} props
 * @param {number} props.stopwatchId
 */
export default function SinglePageToggles({ stopwatchId }) {
    return (
        <SinglePageTogglesWrapper>
            <StopwatchButton onClick={() => addLap(stopwatchId)}>Lap</StopwatchButton>
            <StopwatchButton onClick={() => addToggle(stopwatchId)} theme='danger'>Stop</StopwatchButton>
        </SinglePageTogglesWrapper>
    )
}