# 01 - JavaScript Drum Kit

## Todo

- Reset currentTime on audio clips before replaying
- Refactor event handlers
- Use `<kbd>` HTML elements in place of `<h3>`
- Add equivalent mouse event handlers matching the behavior of the keyboard handlers

## Notes

- Custom `data-key` element attribute allows not using a large switch statement to map from key presses to associated audio clips
- The `<kbd>` HTML element representing the user input via pressing the keyboard
- CSS `transition: all` and CSS shorthand properties
- Need to reset the current time on audio clips to allow playing them in close succession 
- It is possible to add an event listener on 'transitioned' to check specifically for elements that have changed