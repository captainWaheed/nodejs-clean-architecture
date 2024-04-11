# Node.js Clean Architecture Demo

This repository contains a demonstration of a simple Node.js project structured following clean architecture principles. Clean architecture promotes separation of concerns and modularization of code, resulting in more maintainable and scalable applications.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Clean architecture is an architectural pattern that emphasizes the separation of concerns within a software application. It divides the application into layers, each with distinct responsibilities, such as interfaces, application logic, domain entities, and infrastructure.

This repository serves as a demonstration of implementing clean architecture principles in a Node.js project. It provides a structured approach to organizing code, making it easier to understand, maintain, and extend.

## Project Structure

The project is structured as follows:

- **src/interfaces**: Contains controllers responsible for handling HTTP requests and responses.
- **src/application**: Houses use cases and services representing the application's business logic.
- **src/domain**: Defines entities representing core domain concepts.
- **src/infrastructure**: Provides implementations for interacting with external dependencies like databases.
- **config**: Stores configuration files for the application.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-clean-architecture-demo.git
   ```

2. Navigate to the desired branch:

   - **Without Clean Architecture**: `git checkout without-clean-architecture`
   - **With Clean Architecture**: `git checkout with-clean-architecture`

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the project:

   ```bash
   npm start
   ```

5. Access the API endpoints using a tool like Postman or cURL.

## Usage

This project exposes the following endpoints:

- `GET /users`: Retrieves a list of users.
- `POST /users`: Creates a new user.

Ensure to include the necessary request body parameters when making a `POST /users` request (`name` and `email`).

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or fixes you'd like to see in the project. Please adhere to the [code of conduct](CODE_OF_CONDUCT.md) in all interactions.

## License

This project is licensed under the [MIT License](LICENSE).
