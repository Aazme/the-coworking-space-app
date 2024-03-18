<a name='space-management-api'></a>
# Space Management API 

This Node.js application provides CRUD operations for managing spaces, along with Swagger documentation, logging, and commit message enforcement.

<a name='table-of-contents'></a>
## Table of Contents
- [Space Management API](#space-management-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Setup](#setup)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
    - [Set Up Environment Variables](#set-up-environment-variables)
    - [Seed the database](#seed-the-database)
    - [Start the Server](#start-the-server)
  - [Twelve-Factor Apps](#twelve-factor-apps)
  - [Packaging the Helm Chart](#packaging-the-helm-chart)


<a name='features'></a>
## Features


- CRUD operations for managing spaces (Create, Read, Update, Delete)
- Swagger documentation for exploring and testing the APIs
- Logging using Winston to log incoming requests, successful operations, and errors
- Seed script to populate the database with initial data
- Husky and Commitizen integration for enforcing conventional commit messages (npm run commit)
- Metrics for monitoring the application's performance
- No Secrets in the code, all managed through .env file
- 

<a name='setup'></a>
## Setup

<a name='clone-the-repository'></a>
### Clone the Repository

```bash
git clone https://github.com/Aazme/coworking-space-api
cd coworking-space-api
```
<a name='install-dependencies'></a>
### Install Dependencies

```bash
npm install
```
<a name='set-up-environment-variables'></a>
### Set Up Environment Variables

Create a `.env` file in the project root and define the following variables:

```dotenv
PORT=3000
MONGODB_CONNECTION=<your-mongodb-uri>
```

Replace `<your-mongodb-uri>` with your MongoDB connection string.

<a name='seed-the-database'></a>
### Seed the database
  
  ```bash
  npm run seed
  ```
  
<a name='start-the-server'></a>
### Start the Server

```bash
npm run dev
```

- Access the Swagger documentation at [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to explore and test the APIs.
- Use Husky and Commitizen for creating commit messages following the conventional format.
- Access the metrics at [http://localhost:3000/metrics](http://localhost:3000/metrics) to monitor the application's performance.

<a name='twelve-factor-apps'></a>
## Twelve-Factor Apps


- The application follows the Twelve-Factor Apps methodology for better scalability, maintainability, and portability.
- Environment variables are used for configuration, ensuring the application is easily deployable across different environments.
- Dependencies are managed through npm, providing a consistent environment for development and production.

<a name='packaging-helm-chart'></a>
## Packaging the Helm Chart

To package the Helm chart for deployment, follow these steps:

1. **Navigate to the Charts Folder**: Open your terminal and navigate to charts folder.

   ```bash
   helm package .
     ```

2. **Package the Helm Chart**: Use the Helm CLI to package the Helm chart. Run the following command:
3. **Verify Packaged Chart**: Once the packaging process is complete, you should see a .tgz file created in the current directory. You can verify the packaged chart by listing the files in the directory:
4. **Use the Packaged Chart**: You can now use the packaged chart to deploy the application to a Kubernetes cluster. Run the following command to deploy the application using the packaged chart:
   ```bash
   helm install coworking-space-api-release coworking-space-api-0.1.0.tgz
   ```
   Replace `coworking-space-api-release` with the name you want to give to the release and `coworking-space-api-0.1.0.tgz` with the name of the packaged chart file.

   The application will be deployed to the Kubernetes cluster using the packaged chart.
