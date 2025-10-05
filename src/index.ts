export * from '@root/types/index'
export * from '@root/utils/index'

/**
 * Example function demonstrating strict rules.
 * @description Converts input string to uppercase.
 * @param input - Input string to process
 * @returns Processed string
 */
export const exampleFunction: (input: string) => string = (input: string): string => {
  return input.toUpperCase()
}

/**
 * Example class demonstrating strict TypeScript rules.
 * @description Provides value management with strict typing.
 */
export class ExampleClass {
  private value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Get the processed value.
   * @description Returns the stored value converted to uppercase.
   * @returns Processed string value
   */
  public getValue(): string {
    return this.value.toUpperCase()
  }

  /**
   * Set a new value.
   * @description Updates the internal value with the provided string.
   * @param newValue - New value to set
   */
  public setValue(newValue: string): void {
    this.value = newValue
  }
}
