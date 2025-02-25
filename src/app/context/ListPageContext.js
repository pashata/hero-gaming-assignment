import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toast';
import { fetchStopwatches } from '../services';

const ListPageContext = createContext();

const ListPageProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentStopwatches, setCurrentStopwatches] = useState([]);
    const [hasMorePages, setHasMorePages] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchHandler = () => {
        setIsLoading(true);

        fetchStopwatches(currentPage)
            .then(({ meta, result }) => {
                setCurrentStopwatches(oldStopwatches => [...oldStopwatches, ...result]);
                setHasMorePages(meta.currentPage < meta.totalPages);
            })
            .catch((error) => {
                toast.error(error);
                fetchHandler(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const loadMore = () => {
        if (hasMorePages) {
            setCurrentPage(previousPage => previousPage + 1);
        }
    }

    const removeSwatch = (id) => {
        setCurrentStopwatches((oldStopwatches) => oldStopwatches.filter(stopwatch => stopwatch.__id !== id));
    }

    useEffect(fetchHandler, [currentPage]);

    return (
        <ListPageContext.Provider
            value={{
                isLoading,
                stopwatches: currentStopwatches,
                hasMorePages,
                removeSwatch,
                loadMore
            }}
        >
            {children}
        </ListPageContext.Provider>
    );
};

export { ListPageProvider, ListPageContext };
