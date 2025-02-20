import * as React from 'react'
import { fetchStopwatches, createStopwatch } from '../services';
import {
    StopwatchesList,
    StopwatchButton,
    AppWrapper,
    AppMainArea,
    StopwatchLoader
} from '../components';
import { useHistory } from "react-router-dom";

export default function ListPage() {
    const history = useHistory();
    const currentPage = React.useRef(0);
    const [isLoading, setIsLoading] = React.useState(false);
    const [currentStopwatches, setCurrentStopwatches] = React.useState([]);
    const [hasMorePages, setHasMorePages] = React.useState(false);

    const createNewStopwatchHandler = () => {
        createStopwatch().then(({ __id }) => {
            history.push(`/single/${__id}`);
        }).catch((error) => {
            console.log('error', error)
        })
    }

    const fetchHandler = () => {
        setIsLoading(true);
        fetchStopwatches(currentPage.current + 1)
            .then(({ meta, result }) => {
                setCurrentStopwatches(result);
                currentPage.current = meta.currentPage;
                setHasMorePages(meta.currentPage < meta.totalPages);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    React.useEffect(fetchHandler, []);

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
                <StopwatchesList stopwatches={currentStopwatches} />
            </AppMainArea>
            {hasMorePages && (
                <StopwatchButton onClick={fetchHandler}>
                    More
                </StopwatchButton>
            )}
        </AppWrapper>
    )
}