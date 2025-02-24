const API_BASE = '/api'

export const API_ENDPOINTS = {
    getPaginatedStopwatches: (query) => `${API_BASE}/stopwatches${query ? `?${query}` : ''}`,
    createStopwatch: `${API_BASE}/stopwatches`,
    getStopwatch: (id) => `${API_BASE}/stopwatches/${id}`,
    resetStopwatch: (id) => `${API_BASE}/stopwatches/${id}`,
    deleteStopwatch: (id) => `${API_BASE}/stopwatches/${id}`,
    addToggle: (id) => `${API_BASE}/stopwatches/${id}/toggle`,
    addLap: (id) => `${API_BASE}/stopwatches/${id}/lap`,
}
