import { useContext } from 'react';
import { ListPageContext } from '../context';

const useListPageContext = () => {
    const context = useContext(ListPageContext);
    
    if (!context) {
        throw new Error('useListPageContext must be used within a ListPageProvider');
    }

    return context;
};

export default useListPageContext;
