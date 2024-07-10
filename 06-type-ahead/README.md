# 06 Type Ahead

## Todo

- Show results count
- Hide empty search results but show no results message if there is a query
- Mousing over a search result highlights that row and shows that result in the search bar (with the completion in gray)
- Clicking on a search result item narrows the search to just that item
- Support arrow up and down and keyboard controls when using the search bar
- Disable the search bar until cities fetch request is complete
- Fuzzy matching
- Order results by closest match

## Notes

- Using id's for CSS doesn't generally feel good/worth it
- It is more convenient to not need the to hide the results table due to good CSS choices (e.g. `border-collapse`) than it is to hide and show the table by adding and removing CSS classes
- The fetch API [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)]
- Promises [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Regex string replace is a pretty good way to achieve simple sytax highlighting
- Maybe this regex include/exclude pattern could be used for more detailed syntax highlighting where there are possible overlaps between individual pieces of syntax
