---
title: "Class & Functional Components"
date: "2020-01-01"
thumbnail: "/components-1.webp"
snippet: "Since the launch of React in 2013, the framework has evolved and changed overtime. Many of the concepts introduced in the early days of React have fallen out of favor for cleaner, easier to read..."
categories: "React"
---

#React Class Components vs Function Components

![Laptop](../public/blog-images/components-1.webp)

Since the launch of React in 2013, the framework has evolved and changed overtime. Many of the concepts introduced in the early days of React have fallen out of favor for cleaner, easier to read alternatives. This article will be touching on one of those changes by detailing the differences between class components and the eventual shift away from class components entirely.

Components essentially function as the building blocks of React applications, each element of the DOM is comprised of a component (Nav Bar, Footer, Header, etc.) These components are either created as a class or as a function. Each component will contain all of its own logic and styling and can easily be reused within the applications or utilized in future applications.

When React was introduced, class components were created whenever we wanted to manipulate state. Class components consist of a constructor that receives props as an argument and also a render method that is used to return JSX code. At this point, function components were only used to return a React element, whenever state needed to be changed, a class component was utilized.

In 2019, React Hooks were introduced, Hooks allowed function components to manipulate component state, essentially making class and function components capable of producing the same output. However, class components being the lengthier option, mostly fell out of favor for the cleaner function component option.

While function components are currently the go-to method when creating new React components, it still may be important to have a solid understanding of the difference between the two approaches.

###Class Components

![CodeBlock](../public/blog-images/components-2.webp)

Example Class Component
As mentioned above, class components contain a constructor that receives props (data passed along from a parent component to a child component)as an argument. The super keyword is used to pass long the functionality of the parent React.Component class. State values are passed along in the form of key-value pairs and set equal to this.state. Finally the render method is called to return the JSX code which will be displayed on the DOM.

###Function Components

![CodeBlock](../public/blog-images/components-3.webp)

Example Function Component
Function components do not need a render method since the function is already designed to return something. A function component operates similar to any normal JavaScript function and takes in props as an argument. Just like the render function in the class component example, the function component will return JSX code which will be displayed on the DOM. With the use of React hooks, we can now easily manipulate the DOM with hooks like useState and useEffect.

While function components are definitely the standard when it comes to React components at the moment. It’s still a great idea to be aware of class components, their structure, and the evolution of React to further understand the framework.
