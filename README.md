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

	 because `var i` is not declared within a function, which makes `i` a global variable. Therefore, `i` gets updated every time for loop run. Even when `for( 3<3) is false`, global variable `i` still got updated in the global scope

2. **closure**<br />
	>closure is function that is defined in another function. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function

	`setTimeout` created a closure within the for loop. Therefore, the `i` in `console.log` within `setTimeout` accesses the global variable i

3. **callback**<br />

	`setTimeout(callback, delay)` also created callback function, which means whatever in the `callback` will be run after every thing else finished running.In this case, `console.log(...)` will run after for loop finish



**After finished running for loop, the event loop will look like this:**
<br />
![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/vareventloop.png)

**After the event loop is created, this is how the event loop runs the tasks stored in the stack and queue:**
<br />
![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/var.gif)


# Solution:
replace `var` with `let`

```javascript
const arr = [10,12,15];

for (var i = 0; i < arr.length; i++){
	setTimeout(function(){
		console.log('Index' + i + ',element: ' + arr[i]);
	}, 3000);
}
```

and the output will be

```
Index0,element: 10
Index1,element: 12
Index2,element: 15
```

The reason for let as a solution is because:

1.  **let**<br />
	>let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

	if you use `let i`, which means for each for loop, a new variable i is created in its own scope. Therefore, when setTimeout closure try to access the i in outer function, it can only access the i in that scope. Therefore, when `for( 3<3)` is false, no new closure with `i=3` was created.


**After finished running for loop, the event loop with var will look like this:**
<br />
![alt text](https://github.com/aiyxudev/JavaScript-Closure/blob/master/letevent.png)

**How event loop's stack and queue run will be the same as using var**
