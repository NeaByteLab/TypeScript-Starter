# 🔧 TypeScript Starter

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **Strict TypeScript Development Starter** - A comprehensive starter template with strict TypeScript rules, modern tooling, and production-ready configuration for Node.js projects.

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
# Clone and start coding with rules enforced
git clone https://github.com/NeaByteLab/TypeScript-Starter.git my-project
cd my-project
npm install
npm run dev
```

### Development Commands
```bash
# Development
npm run dev              # TypeScript watch mode
npm run build            # Build for production
npm run clean            # Clean build directory

# Code Quality
npm run lint             # ESLint with strict rules
npm run lint:fix         # Auto-fix ESLint violations
npm run format           # Prettier formatting
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run tests with Jest
npm run test:watch       # Watch mode for TDD
npm run test:coverage    # Run tests with coverage

# Documentation
npm run docs             # Generate TypeDoc documentation

# Quality Assurance
npm run check-all        # Lint + Type-check + Test
```

## 📁 Project Structure

```
TypeScript-Starter/
├── src/                    # Source code
│   ├── types/              # Type definitions
│   ├── utils/              # Utility functions
│   └── index.ts            # Main entry point
├── tests/                  # Test files
│   ├── setup.ts            # Test setup
│   └── example.test.ts     # Example tests
├── examples/               # Example usage
│   └── basic-usage.ts      # Basic usage example
├── dist/                   # Build output
├── docs/                   # Auto-generated documentation
├── coverage/               # Test coverage reports
└── Configuration Files     # Strict rules enforced
    ├── tsconfig.json       # TypeScript configuration
    ├── eslint.config.js    # ESLint configuration
    ├── jest.config.js      # Jest testing configuration
    └── package.json        # Dependencies and scripts
```

## 🔧 Strict Rules in Action

### **TypeScript Configuration**
```json
{
  "strict": true,                      // All strict checks enabled
  "noImplicitAny": true,               // No implicit any types
  "noImplicitReturns": true,           // All code paths must return
  "noUnusedLocals": true,              // No unused local variables
  "noUnusedParameters": true,          // No unused parameters
  "exactOptionalPropertyTypes": true,  // Exact optional property types
  "noUncheckedIndexedAccess": true,    // No unchecked indexed access
  "noImplicitOverride": true,          // No implicit override
  "noImplicitThis": true,              // No implicit this
  "noFallthroughCasesInSwitch": true,  // No fallthrough cases in switch
  "allowUnreachableCode": false,       // No unreachable code
  "allowUnusedLabels": false           // No unused labels
}
```

### **ESLint Rules (Strict Style)**
```javascript
// Code Style
'semi': ['error', 'never'],           // No semicolons
'quotes': ['error', 'single'],        // Single quotes
'comma-dangle': ['error', 'never'],   // No trailing commas
'curly': ['error', 'all'],            // Required curly braces
'object-curly-spacing': ['error', 'always'], // Spaces in objects
'array-bracket-spacing': ['error', 'never'], // No spaces in arrays

// Best Practices
'prefer-const': 'error',              // Prefer const
'no-var': 'error',                    // No var
'prefer-template': 'error',           // Template literals
'prefer-arrow-callback': 'error',     // Arrow functions
'no-duplicate-imports': 'error',      // No duplicate imports

// TypeScript Specific
'@typescript-eslint/no-unused-vars': 'error',
'@typescript-eslint/typedef': 'error',               // Explicit type annotations
'@typescript-eslint/no-explicit-any': 'warn',
'@typescript-eslint/no-non-null-assertion': 'error'
```

### **SonarJS Quality Rules**
```javascript
'sonarjs/cognitive-complexity': ['error', 15],  // Max complexity
'sonarjs/no-duplicate-string': 'error',         // No duplicate strings
'sonarjs/no-identical-functions': 'error',      // No identical functions
'sonarjs/prefer-immediate-return': 'error',     // Immediate returns
'sonarjs/no-one-iteration-loop': 'error',       // No one-iteration loops
'sonarjs/no-redundant-boolean': 'error'         // No redundant booleans
```
---

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

### **Type Safety Guaranteed**
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
npm run dev  # Rules enforced automatically
```

### **2. Write Tests**
```bash
npm run test:watch  # TDD approach
```

### **3. Quality Check**
```bash
npm run check-all  # All strict rules checked
```

### **4. Build & Deploy**
```bash
npm run build  # Production build with minification
npm run docs   # Generate TypeDoc documentation
npm run clean  # Clean build directory
```

---

## 📋 Strict Rules Summary

### **✅ Enforced Rules**

**TypeScript:**
- Strict mode with comprehensive type checking
- No implicit any types
- No unused variables or parameters
- All code paths must return
- Explicit type annotations required
- No unreachable code
- Exact optional property types
- No unchecked indexed access

**Code Style:**
- Single quotes, no semicolons
- 2-space indentation
- No trailing commas
- Required curly braces
- Spaces in objects, no spaces in arrays
- Consistent naming conventions

**Best Practices:**
- Prefer const over let/var
- Arrow functions for callbacks
- Template literals over concatenation
- Object destructuring where applicable
- No inline comments
- No duplicate code
- Prefer immediate returns

**Quality:**
- Cognitive complexity ≤ 15
- No duplicate strings
- No identical functions
- No redundant boolean expressions
- No one-iteration loops
- No unused variables
- No unreachable code

### **🎯 Why These Strict Rules?**

1. **Consistency** - Same style across all files
2. **Readability** - Clean, predictable code
3. **Maintainability** - Easy to understand and modify
4. **Quality** - Prevents common mistakes
5. **Performance** - Optimized for modern JavaScript
6. **Team Collaboration** - No style debates

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.