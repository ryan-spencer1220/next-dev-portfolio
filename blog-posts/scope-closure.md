---
title: "Javascript Scope & Closure"
date: "2020-01-02"
thumbnail: "/scope-img1.webp"
category: "JavaScript"
---

![Telescope](/scope-img1.webp)

###Scope
Scope in Javascript typically refers to function scope, functions determine the what items can and cannot access other functions in our application. Scope also refers to the rules that determine where and when our program, variables, and functions are accessible.

![Codeblock](/blog-thumbnails/scope-img2.webp)

###Closure
The following are three commonly accepted definitions of closure in Javascript according to The All Things JavaScript YouTube channel”

1. “A closure is the local variables for a function, kept alive after the function has returned”
2. “Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.”
3. “A closure is a function having access to the parent scope, even after the parent function has closed”

Essentially, even though a function may have already been executed, any functions within those functions (callbacks), can still be executed and still have access to the variables within the outer function.

![Codebock](/blog-thumbnails/scope-img3.webp)

Closures are a reference to specific scopes within a JavaScript application. For example, one file containing a global variable and a function that calls that variable is considered one closure. A more common example would be a function within another function, the inner function has access to the variables and scope of the outer function. This is still true even if the outer function finishes executing and those variables are no longer accessible outside of that function.

The closure is the combination of the function and the environment that the function is declared in. In Javascript, all functions form closures. Essentially, a function has access to any variable within the scope of the environment that it was created in.

Closures are a core concept in functional programming and a common topic at technical interviews. Hopefully this simplifies the concept of scope a bit, this is definitely a concept that I will continue to work with and refine to gain a comprehensive understanding.
