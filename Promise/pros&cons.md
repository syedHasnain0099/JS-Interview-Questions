Pros

Avoid callback hell which can be unreadable.
Makes it easy to write sequential asynchronous code that is readable with .then().
Makes it easy to write parallel asynchronous code with Promise.all().
With promises, these scenarios which are present in callbacks-only coding, will not happen:
Call the callback too early
Call the callback too late (or never)
Call the callback too few or too many times
Fail to pass along any necessary environment/parameters
Swallow any errors/exceptions that may happen
Cons

Slightly more complex code (debatable).
In older browsers where ES2015 is not supported, you need to load a polyfill in order to use it.
