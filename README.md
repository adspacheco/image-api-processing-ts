# Image Processing API

## Introduction

I developed this project as an image processing API using Node.js and Express. Its primary goal was to simulate a real-world scenario of reading and writing to disk. It's a practical demonstration of applying learned skills in real-world scenarios.

## Technologies Used

- **Node.js and Express**: For creating backend server and managing HTTP requests.
- **TypeScript**: For adding typing to JavaScript, enhancing code quality and maintainability.
- **Jasmine**: For unit testing, ensuring that the application functions as expected.
- **Sharp**: A library for image processing.
- **Eslint and Prettier**: To ensure code consistency and best practices.

## Initial Setup

I started this project from scratch, without any starter code. After establishing the basic project structure, I added the necessary dependencies, including Express, TypeScript, Jasmine, Eslint, and Prettier.

## Project Structure

I planned the project structure to keep source code and build code separate. Tests were organized in a specific folder, and routes and utilities were named to facilitate navigation within the project.

## Development

The development involved setting up an API endpoint for image resizing. The Sharp library was employed for image processing, initially focusing on resizing JPG images.

## Testing

Testing was a part of the development process. I wrote unit tests to validate the minimum functionality of the API endpoint and the image processing logic. These tests helped ensure the reliability and correctness of the application.

## Caching

I implemented caching in the application so that repeated requests to the endpoint would use pre-stored images, avoiding generating a new image each time.

## Version Control

Although not required, I used Git from the beginning of the project, committing frequently with well-formatted commit messages.

# Using the Image Processing API

## Getting Started

To begin using the Image Processing API, follow these steps to set up the project on your local machine.

### Prerequisites

- Ensure you have Node.js installed on your system. You can download it from [Node.js website](https://nodejs.org/).
- A basic understanding of Node.js and TypeScript is beneficial.

### Clone the Repository

1. Open your terminal.
2. Clone the repository to your local machine using Git:
   ```
   git clone https://github.com/adspacheco/image-api-processing-ts.git
   ```

### Install Dependencies

1. Navigate to the cloned repository's directory:
   ```
   cd image-api-processing-ts
   ```
2. Install the necessary npm packages:
   ```
   npm install
   ```

### Running the Application

For development:

1. To continuously monitor changes in your TypeScript files and execute tests, use:

   ```
   npm run test:watch
   ```

   This command compiles TypeScript files to JavaScript in the `dist` directory and runs Jasmine tests.

2. In a separate terminal window, start the server by running:
   ```
   DEBUG=http node dist/index.js
   ```
   This starts the server and makes the API available at `localhost:3000` (or another port if configured differently in your project).

### Accessing the API

To test the API, you can use a tool like Postman or a web browser. Here's how to request a resized image:

1. Ensure you have an image named `fjord.jpg` in your `src/assets` folder.
2. Access the API using the URL format:
   ```
   http://localhost:3000/api/images?filename=fjord&width=800&height=600
   ```
   Replace `800` and `600` with your desired width and height.

The server should respond with the resized image. If the image with the specified dimensions already exists, it will serve the cached version.

### Linting and Formatting

- To check for linting issues, run `npm run lint`.
- To automatically fix linting issues, run `npm run lint:fix`.
- To check for formatting issues, run `npm run prettier`.
- To automatically fix formatting issues, run `npm run prettier:fix`.

By following these steps, you should be able to set up and use the Image Processing API for development and testing purposes.

---

For more detailed information on setup and operation, please refer to the comprehensive project documentation. Additionally, you can find valuable resources and materials, which were instrumental in the development and learning process, at the [Udacity GitHub repository](https://github.com/udacity/cd0292-building-a-server-project-starter).

If you encounter any issues or have questions, the issue tracker in the repository is a great place to seek assistance or contribute to ongoing discussions. This project is part of a continuous learning journey, and your contributions or queries can greatly enhance the learning experience for everyone involved.
