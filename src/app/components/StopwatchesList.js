import * as React from 'react';
import { List } from '../components';
import StopwatchesListItem from './StopwatchesListItem';

/**
 * @param {Object} props
 * @param {Stopwatch[]} props.stopwatches
 */
export default function StopwatchesList({ stopwatches }) {    
    return (
        <List>
            {stopwatches.map((stopwatch) => (
                <StopwatchesListItem stopwatch={stopwatch} key={stopwatch.__id} />
            ))}
        </List>
    )
}