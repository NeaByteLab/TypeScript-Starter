import type { Result } from '@root/types'

/**
 * Validate if a string is not empty.
 * @description Checks if the provided string has non-whitespace content.
 * @param value - String to validate
 * @returns True if string is not empty
 */
export const isNotEmpty: (value: string) => boolean = (value: string): boolean => {
  return value.trim().length > 0
}

/**
 * Create a success result.
 * @description Wraps data in a successful result object.
 * @param data - Data to include in result
 * @returns Success result
 */
export const createSuccessResult: <T>(data: T) => Result<T> = <T>(data: T): Result<T> => {
  return {
    success: true,
    data
  }
}

/**
 * Create an error result.
 * @description Wraps an error message in a failed result object.
 * @param error - Error message
 * @returns Error result
 */
export const createErrorResult: <T>(error: string) => Result<T> = <T>(error: string): Result<T> => {
  return {
    success: false,
    error
  }
}

/**
 * Delay execution for specified milliseconds.
 * @description Creates a promise that resolves after the given delay.
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export const delay: (ms: number) => Promise<void> = (ms: number): Promise<void> => {
  return new Promise((resolve: () => void) => {
    setTimeout(resolve, ms)
  })
}
