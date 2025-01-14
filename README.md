# Svelte Todo App with TypeScript

A type-safe, responsive todo application built with Svelte and TypeScript, showcasing modern front-end development practices and clean code principles.

## Features

- TypeScript for enhanced type safety and developer experience
- Add new todos
- Mark todos as completed
- Responsive design for both desktop and mobile
- Clean and intuitive user interface
- Persistent state management using Svelte stores

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

bash

Copy

`git clone <repository-url>
cd svelte-todo-app`

1.  Install dependencies:

bash

Copy

`npm install

# or

yarn`

1.  Start the development server:

bash

Copy

`npm run dev

# or

yarn dev`

The application will be available at `http://localhost:5000`.

## Project Structure

Copy

`src/
├── components/
│   ├── AddTodo.svelte
│   └── TodoList.svelte
├── stores/
│   └── todoStore.ts
├── types/
│   └── index.ts
├── App.svelte
└── main.ts`

## Implementation Details

### Technology Stack

- Svelte - Front-end framework
- TypeScript - Type-safe JavaScript
- CSS3 - Custom styling with responsive design
- UUID - Unique ID generation for todos

### TypeScript Integration

The project uses TypeScript for enhanced type safety and developer experience:

1.  **Type Definitions**:
    - Clear interface definitions for Todo items
    - Type-safe Svelte stores
    - Proper event typing
2.  **Type Safety**:
    - Compile-time type checking
    - Improved code reliability
    - Better IDE support and autocompletion
3.  **Configuration**:
    - Strict TypeScript configuration
    - Svelte-specific TypeScript setup
    - Node.js-compatible module resolution

### Design Decisions

1.  **Component Structure**:
    - Modular components for better maintainability
    - Separation of concerns between UI components and state management
    - Type-safe component props and events
2.  **State Management**:
    - Typed Svelte stores for centralized state management
    - Immutable updates for predictable state changes
    - Type-safe store operations
3.  **Styling**:
    - Custom CSS with BEM-like
