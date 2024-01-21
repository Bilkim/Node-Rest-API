
# Project Overview

Technology Stack  used include:
Node.js, Express.js, Sequelize (ORM), PostgreSQL, Docker

## File directory
* controllers - Contains controllers for handling HTTP requests and business logic.
* middleware - Contains error handler.
* models - Sequelize model definitions for database entities.
* routes - Express.js route definitions.
* test - Test suite for API endpoints.

## Database
* Database: PostgreSQL
* Models: Accounts, Cards
* ORM: Sequelize


## Testing
* Test Framework are Mocha and Chai
* Test cases include are CRUD operations on both accounts and cards.
* Environment: Separate test environment using Docker and a PostgreSQL database for testing.


# Process for running the API on Docker
**Dockerfile** Configurations for building the Docker image.
**compose.yaml** Defines services (server and database) for development and testing.
**.dockerignore** Files to be ignored during Docker image build.

```
docker compose up --build
docker compose run server npm run test
```

To stop and remove containers  and also remove the volumes associated with the containers run:

```
docker compose down --volumes
```

To the project locally without Docker:
N/B - Ensure database host on development and test environment files is changed to *localhost* from *db*

```
npm install
npm run dev
npm run test
```

# Conclusion
Sensitive information, such as database passwords, is handled securely using Docker secrets. This adds an extra layer of security in the production environment.

The API uses environment variables to configure settings like the Node environment, database connection details, and others. This allows for easy configuration in different environments.

The LoopDFS API is designed to provide a reliable and scalable solution for managing bank accounts and cards CRUD operations and it is well-suited for deployment in a production environment with the proper considerations for security, scalability, and monitoring.
