import * as React from 'react';
import { List } from '../components';
import StopwatchesListItem from './StopwatchesListItem';
import { useListPageContext } from '../hooks';

export default function StopwatchesList() {
    const { stopwatches } = useListPageContext();
 
    return (
        <List>
            {stopwatches.map((stopwatch) => (
                <StopwatchesListItem stopwatch={stopwatch} key={stopwatch.__id} />
            ))}
        </List>
    )
}