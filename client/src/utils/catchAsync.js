import { handleError } from "./handleError";

/**
 * Wraps an async function and automatically handles errors
 * @param {Function} asyncFn - The async function to wrap
 * @returns {Function} - Wrapped function that throws normalized error
 */
export const catchAsync = (asyncFn) => {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      // Throws a normalized error
      throw handleError(error);
    }
  };
};
