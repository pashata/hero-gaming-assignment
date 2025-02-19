import * as React from 'react'
import { fetchStopwatches } from '../services';
import { StopwatchesList, StopwatchButton, AppWrapper, AppMainArea } from '../components';

export default function ListPage() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [currentStopwatches, setCurrentStopwatches] = React.useState([]);
    const [hasMorePages, setHasMorePages] = React.useState(false);

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

    const loadNewStopwatches = () => {
        setCurrentPage(oldCurrentPage => oldCurrentPage + 1);
    };

    return (
        <AppWrapper>
            <StopwatchButton>New</StopwatchButton>
            <AppMainArea>
                <StopwatchesList stopwatches={currentStopwatches} />
            </AppMainArea>
            {hasMorePages && (
                <StopwatchButton onClick={loadNewStopwatches}>More</StopwatchButton>
            )}
        </AppWrapper>
    )
}