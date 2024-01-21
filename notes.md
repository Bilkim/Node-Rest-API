
# Project Overview

Technology Stack  used include:
Node.js, Express.js, Sequelize (ORM), PostgreSQL, Docker

# File directory
controllers - Contains controllers for handling HTTP requests and business logic.
middleware - Contains error handler.
models - Sequelize model definitions for database entities.
routes - Express.js route definitions.
utils - Utility functions or helper modules.
test - Test suite for API endpoints.

# Database
Database: PostgreSQL
Models: Accounts, Cards
ORM: Sequelize
Migration: Sequelize migrations used for database schema evolution.

# API Endpoints
/api/accounts
/api/cards


# Testing
Test Framework are Mocha and Chai
Test cases include are CRUD operations on both accounts and cards.
Environment: Separate test environment using Docker and a PostgreSQL database for testing.


# Docker Setup
Dockerfile: Configurations for building the Docker image.
compose.yaml: Defines services (server and database) for development and testing.
.dockerignore: Files to be ignored during Docker image build.




# Additional Considerations
Error Handling: Implement comprehensive error handling for both API requests and database operations.
Middleware: Use middleware for common functionalities like logging, request parsing, etc.
Documentation: Implement Swagger/OpenAPI for API documentation.
Code Quality: Enforce linting and adhere to a coding style guide.
Monitoring: Implement monitoring solutions for tracking API performance and errors.

# Process to run the API
# Command for running locally using Docker - docker compose up --build
# Command for Testing on Docker - docker compose run server npm run test


# Conclusion
The LoopDFS API is designed to provide a reliable and scalable solution for managing bank accounts and cards CRUD operations. It is well-suited for deployment in a production environment with the proper considerations for security, scalability, and monitoring.
