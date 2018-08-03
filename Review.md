# Review Questions

## What is Node.js?

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. It executes JavaScript code outside the browser.

## What is Express?

Express is a web application framework for Node.js used to build web applications and APIs. It saves us from writing a lot of code for core modules that is provided for us when we use it.

## Mention two parts of Express that you learned about this week.

Express is used to build the server on node and helps us write handlers our routes. Express allows us to
add additional request as "middleware" at any point within the request.

## What is Middleware?

Middleware is computer software that connects software components or applications. The software consists of a set of services that allows multiple processes running on one or more machines to interact.(Wiki)
A function that is invoked by the Express routing layer before the final request handler, and thus sits in the middle between a raw request and the final intended route.(Express.js.com)

## What is a Resource?

A resource is when you use routing handlers from Express.js for each CRUD operation.

## What can the API return to help clients know if a request was successful?

Sending a status code of successful when you send the response back to the client.

## How can we partition our application into sub-applications?

By creating links/routes that lead into sub applications.

## What is express.json() and why do we need it?

Express.json is a built in middleware function used for used for parsing and stringfying an object. You use this if you're sending back JSON in the body for put and post.
