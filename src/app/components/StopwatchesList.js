import * as React from 'react';
import { calculateStopwatchValue } from '../utils';
import { List, ListItem, StyledLink } from '../components';

/**
 * @param {Object} props
 * @param {Stopwatch[]} props.stopwatches
 */
export default function StopwatchesList({ stopwatches }) {    
    return (
        <List>
            {stopwatches.map(({ started, toggles, __id }) => {
                const { totalTimeDisplay, isRunning } = calculateStopwatchValue(started, toggles);
                return (
                    <ListItem isFaded={isRunning} key={__id}>
                        <StyledLink to={`/single/${__id}`}>
                            {totalTimeDisplay}
                        </StyledLink>
                    </ListItem>
                )
            })}
        </List>
    )
}