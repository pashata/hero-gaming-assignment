import * as React from 'react';
import { calculateStopwatchTime } from '../utils';
import { List, ListItem, StyledLink } from '../components';

/**
 * @param {Object} props
 * @param {Stopwatch[]} props.stopwatches
 */
export default function StopwatchesList({ stopwatches }) {    
    return (
        <List>
            {stopwatches.map((stopwatch) => {
                const { totalTimeDisplay, isRunning } = calculateStopwatchTime(stopwatch);
                return (
                    <ListItem isFaded={isRunning} key={stopwatch.__id}>
                        <StyledLink to={`/single/${stopwatch.__id}`}>
                            {totalTimeDisplay}
                        </StyledLink>
                    </ListItem>
                )
            })}
        </List>
    )
}