/**
 * Get custom object for response.
 *
 * @param {any} data
 * @param {string|null} message
 * @returns {object}
 */
export function jsonResponse(data: any, message: string = null): object {
  return {
    data: data,
    message: message,
  };
}
