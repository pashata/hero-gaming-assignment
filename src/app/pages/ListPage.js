import * as React from 'react'
import {
    StopwatchesList,
    StopwatchButton,
    AppWrapper,
    AppMainArea,
    StopwatchLoader,
    CreateNewStopwatch
} from '../components';
import { useListPageContext } from '../hooks';
import { ListPageProvider } from '../context';

function ListPage() {
    const {
        isLoading,
        hasMorePages,
        loadMore
    } = useListPageContext();

    if (isLoading) {
        return (
            <AppWrapper>
                <StopwatchLoader message='Loading stopwatches' />
            </AppWrapper>
        )
    }

    return (
        <AppWrapper>
            <CreateNewStopwatch />
            <AppMainArea>
                <StopwatchesList />
            </AppMainArea>
            {hasMorePages && (
                <StopwatchButton onClick={loadMore}>
                    More
                </StopwatchButton>
            )}
        </AppWrapper>
    )
}

export default function ListPageWrapped() {
    return (
        <ListPageProvider>
            <ListPage />
        </ListPageProvider>
    )
}