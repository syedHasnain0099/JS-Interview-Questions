Explain event delegation?

Event Delegation allows you to avoid adding event listeners to each specific child node. Instead, you add a single event listener to a parent element. This listener uses event bubbling to detect and handle events from child elements.

For example, with a parent <ul> element containing several <li> children, you can attach one event listener to the <ul> element. When a child <li> is clicked, the event bubbles up to the parent, and you use the event's target property to determine the actual clicked node. This approach simplifies managing event listeners, especially when child elements are frequently added or removed, as you don't need to attach or detach listeners individually for each child element.
