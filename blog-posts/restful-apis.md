---
title: "REST & RESTful APIs"
date: "2020-01-02"
thumbnail: "/api-img1.webp"
snippet: "Familiarity with REST & RESTful APIs is an increasingly common request from employers looking to hire developers, but what exactly are these terms referring to? This article will..."
categories: "API"
---

#REST & RESTful APIs

![API WhiteBoard](/api-img1.webp)

Familiarity with REST & RESTful APIs is an increasingly common request from employers looking to hire developers, but what exactly are these terms referring to? This article will provide a brief overview of APIs, RESTful architecture, API endpoints, and authentication to clear up some of this potential confusion.

API stands for application program interface, while many types APIs exist, web APIs are typically the most common. In a general sense, APIs are used to communicate from one piece of software to another piece of software. This communication typically consists of a request and a response. The request will be in the form of an “API call” where an application requests some type of data, the API will either respond with a successful response and the requested data, or an error message and an explanation for why the error was triggered.

The terms REST and RESTful APIs refer to the architectural constraints for designing networked applications utilizing a specific form of client/server protocol, typically HTTP. Since most modern programming languages have the ability to make HTTP requests, this makes REST a common standard for making API calls across many languages. The term “RESTful” just indicates the process of conforming to the REST constraints, which we will discuss next.

![codeBlock](/blog-thumbnails/api-img2.webp)

Listed below are the common HTTP requests that we would see in a modern application utilizing an API. While this is not an exhaustive list, these methods provide the application with full CRUD operations and are the most common requests utilized by applications.

#### GET: Retrieve data from a specific source

#### POST: Submit data to be processed to a specified resource

#### PUT: Update or edit a specified resource, typically requires ID to identify element to update

#### DELETE: Similar to PUT, DELETE will require an ID to identify a specific element

In order to return data to the application, the client must specify an endpoint, through endpoints, users can decide what data they would like to receive and how they would like to interact with that data. If existing data is altered, an ID number is usually included in the URL endpoint. Common endpoint examples can be found below.

GET: https://website.com/api/items

POST: https://website.com/api/items/

PUT: https://website.com/api/items/edit/1

DELETE: https://website.com/api/items/delete/1

While many free APIs exist, also known as open APIs, many require payment or provide restrictions such as calls/hour. OAuth is the standard form of authentication, this requires an API key in order to utilize the API and may come with restrictions such as calls/hour.

Hopefully this quick overview on APIs and RESTful API architecture was an informative introduction into API calls. For more information on RESTful APIs and specific criteria, checkout this link here!
