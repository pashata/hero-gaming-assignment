/**
 * Makes an API request using Fetch.
 * @template T
 * @param {string} url - The API endpoint URL.
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [method='GET'] - The HTTP method.
 * @param {Object | null} [data=null] - The request body data.
 * @returns {Promise<T>} - Returns a Promise that resolves to the API response.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function apiRequest(url, method = 'GET', data = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    /** @type {T} */
    return await response.json();
  } catch (error) {
    console.error('API Request Failed:', error.message);
    throw error;
  }
}