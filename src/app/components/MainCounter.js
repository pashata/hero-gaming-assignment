import * as React from 'react';
import styled from '@emotion/styled';
import { calculateStopwatchValue, formatTimestamp } from '../utils';

const MainCounterParagraph = styled.p`
    text-align: center;
    font-size: var(--font-size-extra-large);
    font-weight: var(--font-weight-light);
    padding: var(--spacing-3) 0;
`;

/**
 * @param {Object} props
 * @param {Stopwatch} props.stopwatch
 */
export default function MainCounter({ stopwatch }) {
    const { started, toggles } = stopwatch;
    const {
        isRunning,
        totalTime,
        lastToggle
    } = calculateStopwatchValue(started, toggles)
    
    return (
        <MainCounterParagraph>
            {formatTimestamp(totalTime)}
        </MainCounterParagraph>
    )
}