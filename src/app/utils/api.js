/**
 * @template T
 * @param {string} url
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} [method='GET']
 * @param {Object | null} [data=null]
 * @returns {Promise<T | void>}
 * @throws {Error}
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

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    return;
  } catch (error) {
    throw error;
  }
}