import * as React from 'react';
import { ListItem, StyledLink } from '../components';
import { useCounter } from '../hooks';

/**
 * @param {Object} props
 * @param {Stopwatch} props.stopwatch
 */
export default function StopwatchesListItem({ stopwatch }) {
    const { displayTime, isRunning } = useCounter(stopwatch);
    
    return (
        <ListItem isFaded={isRunning}>
            <StyledLink to={`/single/${stopwatch.__id}`}>
                {displayTime}
            </StyledLink>
        </ListItem>
    )
}