import * as React from 'react';
import { FiPause } from "react-icons/fi";
import { ListItem, StyledLink } from './styled';
import { useCounter } from '../hooks';
import DeleteStopwatch from './DeleteStopwatch';

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
                {isRunning && <FiPause />}
            </StyledLink>
            <DeleteStopwatch id={stopwatch.__id} />
        </ListItem>
    )
}