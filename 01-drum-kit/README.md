# 01 - JavaScript Drum Kit

## Notes

- Custom `data-key` element attribute allows not using a large switch statement to map from key presses to associated audio clips
- The `<kbd>` HTML element representing the user input via pressing the keyboard
- CSS `transition: all` and CSS shorthand properties
- Need to reset the current time on audio clips to allow playing them in close succession 
- It is possible to add an event listener on 'transitioned' to check specifically for elements that have changed
- Replacing switch with a map lookup in JavaScript https://medium.com/front-end-weekly/switch-case-if-else-or-a-lookup-map-a-study-case-de1c801d944