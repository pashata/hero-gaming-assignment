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
 * @param {number} id
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
 * @param {number} id
 * @param {number} time
 * @returns {Promise<Stopwatch>}
 */
async function addLap(id, time) {
    try {
        /** @type {Promise<StopwatchResponse>} */
        const response = await apiRequest(
            API_ENDPOINTS.addLap(id),
            'POST',
            { time }
        );
        
        return response.result;
    } catch (error) {
        console.error('Error adding lap:', error);
    }
}

/**
 * @param {number} id
 * @param {number} time
 * @returns {Promise<Stopwatch>}
 */
async function addToggle(id, time) {
    try {
        /** @type {Promise<StopwatchResponse>} */
        const response = await apiRequest(
            API_ENDPOINTS.addToggle(id),
            'POST',
            { time }
        );
        
        return response.result;
    } catch (error) {
        console.error('Error adding lap:', error);
    }
}

/**
 * @returns {Promise<Stopwatch>}
 */
async function createStopwatch() {
    try {
        /** @type {Promise<StopwatchResponse>} */
        const response = await apiRequest(
            API_ENDPOINTS.createStopwatch,
            'POST',
            {
                started: Date.now() 
            }
        );
        
        return response;
    } catch (error) {
        Promise.reject(`Error adding stopwatch: ${error.message}`)
    }
}

/**
 * @param {number} id
 * @returns {boolean}
 */
async function deleteStopwatch(id) {
    try {
        const response = await apiRequest(
            API_ENDPOINTS.deleteStopwatch(id),
            'DELETE'
        );
        
        return response;
    } catch (error) {
        Promise.reject('Error deleting stopwatch')
    }
}

export {
    fetchStopwatches,
    fetchStopwatch,
    addLap,
    addToggle,
    createStopwatch,
    deleteStopwatch
}