import * as React from 'react';
import { formatTimestamp, calculateLapTimes } from '../utils';
import { List, ListItem } from './styled';

/**
 * @param {Object} props
 * @param {Stopwatch} props.stopwatch
 */
export default function StopwatchLaps({ stopwatch }) {
    const lapTimes = calculateLapTimes(stopwatch);
    return (
        <List>
            {lapTimes.map((lap) => (
                <ListItem key={lap}>
                    {formatTimestamp(lap)}
                </ListItem>
            ))}
        </List>
    )
}