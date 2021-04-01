# unsanitized-html

A common frontend XSS attack can come in the form on unsanitized HTML.

In the most simplest example, take an input form that uses the field data and then adds this to a DOM node. If the user were to input a string like:
```html
"<img src='x' onerror='alert("get hacked")'>";
```
the `img` will break, therefore the code in the `onerror` will be executed in the browser.

## Getting Started
The easiest way to test this is to first start a server. I typically use the VSCode Extension, [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Then try adding a code block like the `img` above, and watch the alert invoke.