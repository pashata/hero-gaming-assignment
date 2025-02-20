import * as React from 'react'
import { fetchStopwatches, createStopwatch } from '../services';
import { StopwatchesList, StopwatchButton, AppWrapper, AppMainArea } from '../components';
import { useHistory } from "react-router-dom";

export default function ListPage() {
    const history = useHistory();
    const [currentPage, setCurrentPage] = React.useState(1);
    const [currentStopwatches, setCurrentStopwatches] = React.useState([]);
    const [hasMorePages, setHasMorePages] = React.useState(false);

    const loadNewStopwatches = () => {
        setCurrentPage(oldCurrentPage => oldCurrentPage + 1);
    };

    const createNewStopwatchHandler = () => {
        createStopwatch().then(({ __id }) => {
            history.push(`/single/${__id}`);
        }).catch((error) => {
            console.log('error', error)
        })
    }

    React.useEffect(() => {
        fetchStopwatches(currentPage)
            .then(({ meta, result }) => {
                setCurrentStopwatches(oldStopwatches => [...oldStopwatches, ...result]);
                setCurrentPage(meta.currentPage);
                setHasMorePages(meta.currentPage < meta.totalPages);
            })
            .catch(() => {
                //Gotta find a better way to fetch it
                setCurrentPage(oldCurrentPage => oldCurrentPage - 1);
            });
    }, [currentPage]);

    return (
        <AppWrapper>
            <StopwatchButton onClick={createNewStopwatchHandler}>New</StopwatchButton>
            <AppMainArea>
                <StopwatchesList stopwatches={currentStopwatches} />
            </AppMainArea>
            {hasMorePages && (
                <StopwatchButton onClick={loadNewStopwatches}>More</StopwatchButton>
            )}
        </AppWrapper>
    )
}