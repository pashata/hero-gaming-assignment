import * as React from 'react'
import { createStopwatch } from '../services';
import {
    StopwatchesList,
    StopwatchButton,
    AppWrapper,
    AppMainArea,
    StopwatchLoader
} from '../components';
import { useListPageContext } from '../hooks';
import { ListPageProvider } from '../context';
import { useHistory } from "react-router-dom";

function ListPage() {
    const history = useHistory();
    const {
        isLoading,
        hasMorePages,
        fetchHandler
    } = useListPageContext();

    const createNewStopwatchHandler = () => {
        createStopwatch().then(({ __id }) => {
            history.push(`/single/${__id}`);
        }).catch((error) => {
            console.log('error', error)
        })
    }

    if (isLoading) {
        return (
            <AppWrapper>
                <StopwatchLoader message='Loading stopwatches' />
            </AppWrapper>
        )
    }

    return (
        <AppWrapper>
            <StopwatchButton onClick={createNewStopwatchHandler}>New</StopwatchButton>
            <AppMainArea>
                <StopwatchesList />
            </AppMainArea>
            {hasMorePages && (
                <StopwatchButton onClick={fetchHandler}>
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