/**
 * Test setup configuration
 * @module tests/setup
 */

// Global test configuration
beforeAll(() => {
  console.log('Setting up test environment')
})

afterAll(() => {
  console.log('Cleaning up test environment')
})

// Global test utilities
export const testUtils = {
  /**
   * Create a mock function
   * @returns Mock function
   */
  createMock: () => jest.fn(),

  /**
   * Wait for async operations
   * @param ms - Milliseconds to wait
   * @returns Promise that resolves after delay
   */
  wait: (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
} 