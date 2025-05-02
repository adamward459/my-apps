# Tao of React - Software Design, Architecture & Best Practices Summary

## Components

- **Favor Functional Components**: Use functional components over class components for simpler syntax and smaller mental model
- **Write Consistent Components**: Maintain consistency in helper function placement, export style, and naming patterns
- **Name Components**: Always name your components for better error traces and debugging with React Dev Tools
- **Organize Helper Functions**: Move helper functions outside of components when they don't need closure over component state
- **Don't Hardcode Markup**: Use configuration objects and loops for repetitive markup like navigation, filters, or lists
- **Manage Component Size**: Split large components into smaller ones with clear responsibilities
- **Write Comments in JSX**: Provide clarity for business logic that's coupled to markup
- **Use Error Boundaries**: Wrap separate elements to prevent cascading failures
- **Destructure Props**: Directly use props values instead of repeating `props.` everywhere
- **Manage the Number of Props**: Consider splitting components that have more than 5 props
- **Pass Objects Instead of Primitives**: Group related props into objects for cleaner interfaces
- **Conditional Rendering**: Prefer ternary operators over short-circuit operators to avoid unwanted rendering (like `0`)
- **Avoid Nested Ternary Operators**: Extract complex conditionals into their own components
- **Move Lists in Separate Components**: Extract list rendering logic for better readability
- **Assign Default Props When Destructuring**: Set default values directly in the function parameters
- **Avoid Nested Render Functions**: Create proper components instead of helper render functions

## State Management

- **Use Reducers**: Start with `useReducer` before reaching for external libraries for complex state
- **Prefer Hooks to HOCs and Render Props**: Hooks provide cleaner composition without nesting issues
- **Use Data Fetching Libraries**: Consider libraries like React Query for server state management
- **State Management Libraries**: Only use libraries like Recoil or Redux for large, complex applications

## Component Mental Models

- **Container & Presentational**: The classic pattern works but can lead to bloated container components
- **Stateless & Stateful**: Think about responsibilities and where state should live; spread complexity throughout the app

## Application Structure

- **Group by Route/Module**: Structure by domain/module instead of technical details (containers/components)
- **Create a Common Module**: Extract shared components like buttons, inputs, and cards
- **Use Absolute Paths**: Make imports more stable and easier to follow
- **Wrap External Components**: Create adapters around third-party components for easier changes
- **Move Components in Folders**: Group related files (component, styles, tests) in their own folders

## Performance

- **Don't Optimize Prematurely**: Ensure code is readable and maintainable first
- **Watch Bundle Size**: Split your application to reduce initial load time
- **Rerenders - Callbacks, Arrays and Objects**: Be aware of reference identity issues but prioritize readability

## Testing

- **Don't Rely on Snapshot Tests**: They rarely catch actual issues
- **Test Correct Rendering**: Validate that components render correctly with different props
- **Validate State & Events**: Test event handling and state changes
- **Test Edge Cases**: Cover edge conditions like empty arrays and error handling
- **Write Integration Tests**: Ensure components work well together

## Styling

- **Use CSS-in-JS**: Keep component styling with the component (though other approaches work too)
- **Keep Styled Components Together**: Group styled components in the same file if possible

## Data Fetching

- **Use a Data Fetching Library**: Libraries like React Query or SWR handle caching and state management
