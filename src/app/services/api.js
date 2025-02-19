import { apiRequest } from '../utils';
import { API_ENDPOINTS } from '../constants';

/**
 * Fetches stopwatches from the API.
 * @param {number} page - Page number to fetch.
 * @returns {Promise<StopwatchesResponse>} - The API response.
 */
async function fetchStopwatches(page = 1) {
    try {
        const query = new URLSearchParams({ page }).toString();
        
        /** @type {Promise<StopwatchesResponse>} */
        const response = await apiRequest(API_ENDPOINTS.getPaginatedStopwatches(query));
        
        return response;
    } catch (error) {
        console.error('Error fetching stopwatches:', error);
    }
}

export { fetchStopwatches }