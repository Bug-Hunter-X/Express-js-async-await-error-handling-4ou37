# Express.js async/await error handling

This repository demonstrates a common error in Express.js applications when handling asynchronous operations and provides a solution for proper error handling.

## Bug
The `bug.js` file contains an Express.js server with an asynchronous operation that might throw an error. The current error handling only logs the error to the console but doesn't send an error response to the client, resulting in a poor user experience. 

## Solution
The `bugSolution.js` file demonstrates the correct way to handle errors in Express.js using async/await and proper error handling middleware. The solution sends appropriate error responses to the client, improving the user experience.

## How to reproduce
1. Clone this repository
2. Navigate to the directory
3. Run `npm install` to install the dependencies
4. Run `node bug.js` to start the server with the bug.
5. Run `node bugSolution.js` to start the server with the solution.
