import { apiRequest } from '../utils';
import { API_ENDPOINTS } from '../constants';

/**
 * @param {number} page
 * @returns {Promise<StopwatchesResponse>}
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

/**
 * @param {number} page
 * @returns {Promise<Stopwatch>}
 */
async function fetchStopwatch(id) {
    try {
        /** @type {Promise<StopwatchResponse>} */
        const response = await apiRequest(API_ENDPOINTS.getStopwatch(id));
        
        return response.result;
    } catch (error) {
        console.error('Error fetching stopwatch:', error);
    }
}

/**
 * @param {number} page
 * @returns {Promise<Stopwatch>}
 */
async function addLap(id) {
    try {
        /** @type {Promise<StopwatchResponse>} */
        const response = await apiRequest(
            API_ENDPOINTS.addLap(id),
            'POST',
            {
                time: Date.now() 
            }
        );
        
        return response.result;
    } catch (error) {
        console.error('Error adding lap:', error);
    }
}

/**
 * @param {number} page
 * @returns {Promise<Stopwatch>}
 */
async function addToggle(id) {
    try {
        /** @type {Promise<StopwatchResponse>} */
        const response = await apiRequest(
            API_ENDPOINTS.addToggle(id),
            'POST',
            {
                time: Date.now() 
            }
        );
        
        return response.result;
    } catch (error) {
        console.error('Error adding lap:', error);
    }
}

export { fetchStopwatches, fetchStopwatch, addLap, addToggle }