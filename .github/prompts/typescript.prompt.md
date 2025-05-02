- Interface starts with `I`, Type starts with `T` and enum starts with `E`
- Always add return type but for React component we don't have to
- Always use named exports
- Always define an interface for parameter passed to a function
  Example:

  ```ts
  interface IDoSomethingParams {}
  function doSomething(params: IDoSomethingParams) {}
  ```
