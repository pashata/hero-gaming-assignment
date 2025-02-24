/* * * * Objects * * * */

/**
 * @typedef {Object} Stopwatch
 * @property {number} __id - Unique ID of the stopwatch.
 * @property {number[]} laps - Array of lap timestamps (in milliseconds).
 * @property {number} started - Timestamp when the stopwatch started (in milliseconds).
 * @property {number[]} toggles - Array of toggle timestamps (in milliseconds).
 */

/**
 * @typedef {Object} Pagination
 * @property {number} currentPage - The current page number.
 * @property {number} totalPages - The total number of pages.
 */

/* * * * API * * * */

/**
 * @typedef {Object} StopwatchesResponse
 * @property {Pagination} meta - Pagination metadata.
 * @property {Stopwatch[]} result - List of stopwatches.
 */

/**
 * @typedef {Object} StopwatchResponse
 * @property {Object} meta - Pagination metadata.
 * @property {Stopwatch} result - List of stopwatches.
 */
