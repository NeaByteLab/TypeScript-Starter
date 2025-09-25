# 🔧 TypeScript Starter

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **TypeScript Starter** - A starter template with TypeScript rules, tooling, and configuration for Node.js projects.

---

## 🎯 Strict Coding Rules (Enforced)

### **TypeScript Rules**
```typescript
// ✅ ENFORCED: Strict mode with comprehensive type checking
// ✅ ENFORCED: No implicit any types
// ✅ ENFORCED: No unused variables or parameters
// ✅ ENFORCED: All code paths must return
// ✅ ENFORCED: Explicit type annotations required
// ✅ ENFORCED: No unreachable code
// ✅ ENFORCED: Exact optional property types
// ✅ ENFORCED: No unchecked indexed access

// ❌ This will fail:
function badFunction(input) {  // implicit any
  if (condition) return value  // not all paths return
  const unused = "never used"  // unused variable
}

// ✅ This passes:
function goodFunction: (input: string) => string = (input: string): string => {
  if (condition) {
    return value
  }
  return defaultValue
}
```

### **Code Style Rules**
```typescript
// ✅ ENFORCED: Single quotes, no semicolons
// ✅ ENFORCED: 2-space indentation
// ✅ ENFORCED: No trailing commas
// ✅ ENFORCED: Required curly braces
// ✅ ENFORCED: Spaces inside object braces
// ✅ ENFORCED: No spaces inside array brackets
// ✅ ENFORCED: Consistent naming conventions

// ❌ This will fail:
const obj = {a: 1, b: 2,};   // trailing comma
const arr = [ 1, 2, 3 ];     // spaces in array
if(condition) return value;  // no curly braces, semicolon

// ✅ This passes:
const obj = { a: 1, b: 2 }
const arr = [1, 2, 3]
if (condition) {
  return value
}
```

### **Best Practices Rules**
```typescript
// ✅ ENFORCED: Prefer const over let/var
// ✅ ENFORCED: Arrow functions for callbacks
// ✅ ENFORCED: Template literals over concatenation
// ✅ ENFORCED: Object destructuring where applicable
// ✅ ENFORCED: No inline comments
// ✅ ENFORCED: Cognitive complexity ≤ 15
// ✅ ENFORCED: No duplicate code
// ✅ ENFORCED: Prefer immediate returns

// ❌ This will fail:
var oldWay = "string" + variable;  // var, concatenation
function callback() { return value; }  // function instead of arrow
// inline comment  // inline comment

// ✅ This passes:
const newWay = `string ${variable}`
const callback = () => value
// Block comment for complex logic
```

### **Quality Rules**
```typescript
// ✅ ENFORCED: No duplicate strings
// ✅ ENFORCED: No identical functions
// ✅ ENFORCED: No redundant boolean expressions
// ✅ ENFORCED: Prefer immediate returns
// ✅ ENFORCED: No one-iteration loops
// ✅ ENFORCED: No unused variables
// ✅ ENFORCED: No unreachable code

// ❌ This will fail:
const message = "Hello"
const greeting = "Hello"   // duplicate string

if (condition === true) {  // redundant boolean
  return value
}

// ✅ This passes:
const MESSAGES = {
  GREETING: "Hello"
} as const

if (condition) {
  return value
}
```

---

## 🚀 Quick Start

### Installation
```bash
# Clone and start coding
git clone https://github.com/NeaByteLab/TypeScript-Starter.git my-project
cd my-project
npm install
npm run dev
```

### Development Commands
```bash
# Development
npm run dev                # TypeScript watch mode
npm run build              # Build for production
npm run clean              # Clean build directory

# Code Quality
npm run lint               # ESLint with strict rules
npm run lint:fix           # Auto-fix ESLint violations
npm run format             # Prettier formatting
npm run type-check         # TypeScript type checking

# Testing
npm run test               # Run tests with Jest
npm run test:watch         # Watch mode for TDD
npm run test:coverage      # Run tests with coverage

# Documentation
npm run docs               # Generate TypeDoc documentation

# Quality Assurance
npm run check-all          # Run all checks
```

## 📁 Project Structure

```
TypeScript-Starter/
├── src/                      # Source code
│   ├── types/                # Type definitions
│   │   └── index.ts          # Common types: ConfigOptions, Result<T>, EventHandler, etc.
│   ├── utils/                # Utility functions
│   │   └── index.ts          # Helper functions: isNotEmpty, createSuccessResult, etc.
│   └── index.ts              # Main entry point - exports all public APIs
├── tests/                    # Test files
│   ├── setup.ts              # Jest test setup and global configurations
│   └── example.test.ts       # Test suite for all functions
├── examples/                 # Example usage
│   └── basic-usage.ts        # Usage examples with async support
├── dist/                     # Build output (ESM + type definitions)
├── docs/                     # Auto-generated TypeDoc documentation
├── coverage/                 # Test coverage reports (HTML + LCOV)
└── Configuration Files       # Strict rules enforced
    ├── tsconfig.json         # TypeScript configuration (all strict options enabled)
    ├── eslint.config.js      # ESLint configuration (200+ rules)
    ├── jest.config.js        # Jest testing configuration with TypeScript
    └── package.json          # Dependencies and scripts
```

## 📦 Core API Reference

### **Type Definitions**
```typescript
// Configuration options interface
export interface ConfigOptions {
  readonly debug: boolean
  readonly timeout: number
  readonly retries: number
}

// Result type for operations (success/error handling)
export type Result<T> = {
  readonly success: boolean
  readonly data?: T
  readonly error?: string
}

// Event handler type
export type EventHandler<T = unknown> = (event: T) => void

// Async operation type
export type AsyncOperation<T> = () => Promise<T>

// Validation function type
export type Validator<T> = (value: T) => boolean
```

### **Utility Functions**
```typescript
// String validation
export const isNotEmpty: (value: string) => boolean

// Result constructors
export const createSuccessResult: <T>(data: T) => Result<T>
export const createErrorResult: <T>(error: string) => Result<T>

// Async utilities
export const delay: (ms: number) => Promise<void>
```

### **Main Exports**
```typescript
// Example function (demonstrates strict typing)
export const exampleFunction: (input: string) => string

// Example class (demonstrates OOP with strict rules)
export class ExampleClass {
  constructor(value: string)
  public getValue(): string
  public setValue(newValue: string): void
}
```

### **Usage Examples**
```typescript
import {
  exampleFunction,
  ExampleClass,
  isNotEmpty,
  createSuccessResult,
  createErrorResult,
  delay,
  type ConfigOptions,
  type Result
} from 'typescript-starter'

// Function usage
const result = exampleFunction('hello world')
console.log(result) // "HELLO WORLD"

// Class usage
const instance = new ExampleClass('test value')
console.log(instance.getValue()) // "TEST VALUE"

// Utility usage
console.log(isNotEmpty('valid')) // true
console.log(isNotEmpty('')) // false

const success = createSuccessResult({ message: 'OK' })
const error = createErrorResult<string>('Failed')

// Async usage
await delay(1000)
console.log('Delayed execution')
```

## 📊 Code Quality Metrics

### **Cognitive Complexity Limit: 15**
```typescript
// ❌ Too complex (will fail)
function complexFunction(input: string): string {
  if (condition1) {
    if (condition2) {
      if (condition3) {
        if (condition4) {
          if (condition5) {
            return "too complex"
          }
        }
      }
    }
  }
  return "default"
}

// ✅ Simple and clear (passes)
function simpleFunction(input: string): string {
  if (!condition1) return "default"
  if (!condition2) return "default"
  if (!condition3) return "default"
  return "result"
}
```

### **Type Safety**
```typescript
// ❌ These will fail compilation
function badFunction(input) {           // implicit any
  if (condition) return value           // not all paths return
  const unused = "never used"           // unused variable
}

// ✅ These pass strict checking
function goodFunction(input: string): string {
  if (condition) {
    return value
  }
  return defaultValue
}
```

---

## 🧪 Testing (Required)

### **Test Structure**
```typescript
// tests/example.test.ts
import { exampleFunction, ExampleClass } from '@/index'

describe('exampleFunction', () => {
  it('should convert string to uppercase', () => {
    const result = exampleFunction('test')
    expect(result).toBe('TEST')
  })
})

describe('ExampleClass', () => {
  let instance: ExampleClass

  beforeEach(() => {
    instance = new ExampleClass('initial')
  })

  it('should set and get values correctly', () => {
    instance.setValue('new value')
    expect(instance.getValue()).toBe('NEW VALUE')
  })
})
```

### **Coverage Requirements**
- **Lines**: 80% minimum
- **Functions**: 100% for public APIs
- **Branches**: 80% minimum
- **Statements**: 80% minimum

### **Running Tests**
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📚 Documentation (Enforced)

### **JSDoc Required for Public APIs**
```typescript
/**
 * Example function demonstrating strict rules
 * @param input - Input string to process
 * @returns Processed string in uppercase
 */
export const exampleFunction: (input: string) => string = (input: string): string => {
  return input.toUpperCase()
}

/**
 * Example class with strict typing
 */
export class ExampleClass {
  private value: string

  constructor(initialValue: string) {
    this.value = initialValue.toUpperCase()
  }

  /**
   * Get the current value
   * @returns The current value in uppercase
   */
  public getValue(): string {
    return this.value
  }

  /**
   * Set a new value
   * @param newValue - The new value to set
   */
  public setValue(newValue: string): void {
    this.value = newValue.toUpperCase()
  }
}
```

---

## 🔍 Path Aliases (Clean Imports)

```typescript
// ❌ Relative imports (messy)
import { utils } from '../../../utils/helper'

// ✅ Path aliases (clean)
import { utils } from '@/utils/helper'
import { types } from '@types/common'
import { helpers } from '@utils/helpers'
```

### **Available Path Aliases**
- `@/*` → `src/*` (main source directory)
- `@types/*` → `src/types/*` (type definitions)
- `@utils/*` → `src/utils/*` (utility functions)

## 🛠️ Development Workflow

### **1. Start Coding**
```bash
npm run dev         # Rules are checked
```

### **2. Write Tests**
```bash
npm run test:watch  # TDD approach
```

### **3. Quality Check**
```bash
npm run check-all  # All rules checked
```

### **4. Build & Deploy**
```bash
npm run build      # Production build with minification
npm run docs       # Generate TypeDoc documentation
npm run clean      # Clean build directory
```

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
