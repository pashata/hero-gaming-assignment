import * as React from 'react';
import { ListItem, StyledLink } from '../components';
import { formatTimestamp } from '../utils';
import { useCounter } from '../hooks';

/**
 * @param {Object} props
 * @param {Stopwatch} props.stopwatch
 */
export default function StopwatchesListItem({ stopwatch }) {
    const { totalTime, time, isRunning } = useCounter(stopwatch);
    
    return (
        <ListItem isFaded={isRunning}>
            <StyledLink to={`/single/${stopwatch.__id}`}>
                {formatTimestamp(totalTime+time)}
            </StyledLink>
        </ListItem>
    )
}