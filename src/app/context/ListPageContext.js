import React, { createContext, useState, useRef, useEffect } from 'react';
import { fetchStopwatches } from '../services';

const ListPageContext = createContext();

const ListPageProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentStopwatches, setCurrentStopwatches] = useState([]);
    const [hasMorePages, setHasMorePages] = useState(true);
    
    const currentPage = useRef(0);

    const fetchHandler = (refetch = false) => {
        const newPage = refetch ? currentPage.current : currentPage.current + 1
        setIsLoading(true);

        fetchStopwatches(newPage)
            .then(({ meta, result }) => {
                setCurrentStopwatches(result);
                currentPage.current = meta.currentPage;
                setHasMorePages(meta.currentPage < meta.totalPages);
            })
            .catch((error) => {
                console.error('Error happened', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(fetchHandler, []);

    return (
        <ListPageContext.Provider
            value={{
                isLoading,
                stopwatches: currentStopwatches,
                hasMorePages,
                fetchHandler
            }}
        >
            {children}
        </ListPageContext.Provider>
    );
};

export { ListPageProvider, ListPageContext };
