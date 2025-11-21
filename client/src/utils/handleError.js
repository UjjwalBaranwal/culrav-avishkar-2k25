/**
 * Normalizes API errors from Axios or any other source
 * @param {any} error - The error thrown by API call
 * @returns {object} - { message: string, status: number | null }
 */
export const handleError = (error) => {
  if (!error) return { message: "Unknown error", status: null };

  // Axios response error
  if (error.response) {
    const { data, status } = error.response;
    return {
      message: data?.message || "Server error",
      status: status,
      errorCode: data?.errorCode,
    };
  }

  // Axios request error (no response)
  if (error.request) {
    return { message: "No response from server", status: null };
  }

  // Other JS errors
  return { message: error.message || "Something went wrong", status: null };
};
