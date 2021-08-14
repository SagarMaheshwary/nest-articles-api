/**
 * Get custom object for response.
 *
 * @param data
 * @param message
 * @param error
 * @returns
 */
export function jsonResponse(data: any, message: string = null): object {
  return {
    data: data,
    message: message,
  };
}
