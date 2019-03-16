# JavaScript-Closure

Let's take a look at my understanding of closure + loop, global/block scope and setTimeout using this
Amazon interview questions. What will be the result of this code?

```
const arr = [10,12,15];

for (var i = 0; i < arr.length; i++){
	setTimeout(function(){
		console.log('Index' + i + ',element: ' + arr[i]);
	}, 3000);
}

```
The answer will be:

```
Index: 3, element: undefined
Index: 3, element: undefined
Index: 3, element: undefined
```

Below are my visualized explanation for the output above. *Thanks for Philip Roberts for
giving me new insights of JavaScript event loop.s*

###### when ```var```

according to MDN's explanation, variable var:
*The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value.*

according to Eric Elliott's explanation of closure:

*To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.
The inner function will have access to the variables in the outer function scope, even after the outer function has returned.*

Because var here is not declare within a function, so the var is a global variable.And setTimeout works as a closure here.
These two reasons explained why when ```for( 3 < 3) return false```	setTimeout function can access var i = 3.
The event loop will looks like this after finish running.

![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/01.png)

After the event loop is created, this is how the event loop runs the tasks stored in the stack and queue

![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/var.gif)
