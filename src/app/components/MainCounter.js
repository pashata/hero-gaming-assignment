import * as React from 'react';
import styled from '@emotion/styled';
import { formatTimestamp } from '../utils';
import { useCounter } from '../hooks';

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
    const { totalTime, time } = useCounter(stopwatch);
    
    return (
        <MainCounterParagraph>
            {formatTimestamp(totalTime+time)}
        </MainCounterParagraph>
    )
}