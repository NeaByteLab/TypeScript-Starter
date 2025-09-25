/**
 * Utility functions
 * @module utils
 */

import type { Result } from '@/types'

/**
 * Validate if a string is not empty
 * @param value - String to validate
 * @returns True if string is not empty
 */
export const isNotEmpty: (value: string) => boolean = (value: string): boolean => {
  return value.trim().length > 0
}

/**
 * Create a success result
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
 * Create an error result
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
 * Delay execution for specified milliseconds
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export const delay: (ms: number) => Promise<void> = (ms: number): Promise<void> => {
  return new Promise((resolve: () => void) => {
    setTimeout(resolve, ms)
  })
}
