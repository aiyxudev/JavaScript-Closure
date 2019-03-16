# Understand JavaScript Closure

Let's take a look at my understanding of closure + loop, global/block scope using this Amazon interview questions. What will be the result of this code?

```javascript
const arr = [10,12,15];

for (var i = 0; i < arr.length; i++){
	setTimeout(function(){
		console.log('Index' + i + ',element: ' + arr[i]);
	}, 3000);
}
```

The output will be:

```
Index: 3, element: undefined
Index: 3, element: undefined
Index: 3, element: undefined
```

Let's take a look on how did I approach this code. There are three reasons for the output:

1. **var**<br />
	 >The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value.

	 because **var i** is not declared within a function, which makes **i** a global variable. Therefore, **i** gets updated every time for loop run

2. **closure**<br />
	>closure is function that is defined in another function. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function

	**setTimeout** created a closure within the for loop. Therefore, the **i** in **console.log** within **setTimeout** accesses the global variable i

3. **callback**<br />

	**setTimeout** also created callback function, which means whatever in the **setTimeout** will be run after every thing else finished running.


######After finished running for loop, the event loop will look like this
![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/01.png=380x490)

######After the event loop is created, this is how the event loop runs the tasks stored in the stack and queue
![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/var.gif)




Below are my visualized explanation for the output above. *Thanks for Philip Roberts for
giving me new insights of JavaScript event loop.s*
