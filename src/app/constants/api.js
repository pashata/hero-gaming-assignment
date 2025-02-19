const API_BASE = '/api'

export const API_ENDPOINTS = {
    getPaginatedStopwatches: (query) => `${API_BASE}/stopwatches${query ? `?${query}` : ''}`,
    createStopwatch: `${API_BASE}/stopwatches`,
    getStopwatch: (id) => `${API_BASE}/stopwatches/${id}`,
    resetStopwatch: (id) => `${API_BASE}/stopwatches/${id}`,
    deleteStopwatch: (id) => `${API_BASE}/stopwatches/${id}`,
    toggleStopwatch: (id) => `${API_BASE}/stopwatches/${id}/toggle`,
    lapStopwatch: (id) => `${API_BASE}/stopwatches/${id}/lap`,
}
