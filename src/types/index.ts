/**
 * Configuration options interface.
 * @description Defines the structure for configuration settings.
 */
export interface ConfigOptions {
  readonly debug: boolean
  readonly timeout: number
  readonly retries: number
}

/**
 * Result type for operations.
 * @description Generic result wrapper for success/error states.
 */
export type Result<T> = {
  readonly success: boolean
  readonly data?: T
  readonly error?: string
}

/**
 * Event handler type.
 * @description Generic function type for event handling.
 */
export type EventHandler<T = unknown> = (event: T) => void

/**
 * Async operation type.
 * @description Generic function type for asynchronous operations.
 */
export type AsyncOperation<T> = () => Promise<T>

/**
 * Validation function type.
 * @description Generic function type for value validation.
 */
export type Validator<T> = (value: T) => boolean
