# Working with Timers

- [JavaScript Timers](https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Code_snippets/Timers) -

## Timers

There are often times when you may need  something to happen on the page without a trigger from the user. Examples include: timed slideshows, rotating site or product reviews, simple animations (e.g. fades and slides), etc.). In order to trigger functions automatically, we can take advantage of several functions in the browser's global scope: `setTimeout` and `setInterval`.

To demonstrate how these functions can be used to automate actions on the page, we will revisit the image carousel from the previous exercise:

> Figure 1. Image carousel from previous exercise

![](./img/fig.1.png)

We will implement a timer for the carousel that will progress onto the next image in the slideshow every 3 seconds.

## Operation of `setTimeOut` and `setInterval`

Each of the two functions mentioned here have identical APIs and only differ in how they operate, with setTimeout only calling a function a single time and setInterval continuing to call the function after the specified amount of time. Both functions are called with the following three parameters:

1. Function to call
2. Time to wait before/between calling the function (specified in milliseconds)
3. A comma separated list of arguments to the called function

Typically you will see only the first two parameters used in these calls to due to the fact that IE (all versions) do not implement the list of arguments.

Once called, each function returns an id, which can then be used to identify the specific context that was created. This is useful as each function has a paired clear function (e.g. clearTimeout) that can be used to cancel the context that was created before the next function call. Examples of creating a timeout context and then cancelling follow.

> Example 1. Using setTimeout to set a onetime call to a function for 3 seconds in the future and setInterval to call a function every 3 seconds.

```js
let to = setTimeout(someFunction,3000);
let to = setInterval(someFunction,3000);
```

> Example 2. Using the paired function clearTimeout and clearInterval to cancel the previously created timeout contexts

```js
clearTimeout(to);
clearInterval(to);
```

Automating the Slideshow in order for the slideshow to automatically move onto the next image a timer must be initialized. We will need to set an interval so that the site continues to progress to a new slide every 3 seconds (setInverval), and not just once after 3 seconds (setTimeout).

Setup the interval to call the moveSlide function every 3 seconds. Because we cannot rely on the setInterval's third parameter (i.e. the argument list), we will have to use an anonymous function in the call to setInterval that can make the call to moveSlide:

> Example 5. Making the call to setInterval

```js
// add a variable to track the context of the interval
let slideshowInterval;
...
// now call the setInterval function to begin the slideshow
slideshowInterval = setInterval(function () {
  moveSlide(+1);
}, 3000);
```

That's it! Reload the page and your slideshow should move along every 3 seconds.
