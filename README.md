# Next.js/Fastify - React Admin Project

**FrontEnd** - This is a **Next.js** project that demonstrates how to integrate **React Admin** with Next.js by using both client-side and server-side components to fetch and display data. Both the client-side and server-side components fetch data in the same way, ensuring consistency. The client-side uses **React Admin** components to manage and display the data, while the server-side fetches the data initially, providing a unified approach across both layers.

# Fastify with TypeORM and PostgreSQL

**Backend** - This project demonstrates how to build a backend using **Fastify** with **TypeORM** to interact with a **PostgreSQL** database. It utilizes **controllers** for business logic and **routes** for handling email-related operations. TypeORM is used to interact with the database in a structured way, and PostgreSQL is the database that stores the data.

## Features:
- **Fastify**: A fast and low-overhead web framework for Node.js.
- **TypeORM**: An ORM for TypeScript and JavaScript that works with PostgreSQL.
- **PostgreSQL**: A relational database system used to store and manage email data.
- **Controllers**: Encapsulate the business logic for email operations.
- **Routes**: Handle HTTP requests and map them to appropriate controllers.

## Backend Architecture:

- **Controllers**: Contain the business logic for managing emails.
- **Routes**: Handle incoming HTTP requests and call the necessary controller functions for business logic execution.
- **TypeORM**: Handles the connection and interaction with the PostgreSQL database.
## Postman Request Example

To test the POST endpoint to create an email, use the following configuration in Postman:

### Request Type: `POST`

**URL**: `http://localhost:3001/email`
### Request Body:

```json
{
    "to": "email@gmail.com",
    "cc": "email@gmail.com",
    "bcc": "email@gmail.com",
    "subject": "Title",
    "body": "example"
}
```
### Request Type: `GET`

**URL**: `http://localhost:3001/email?filter={}&limit=10&page=1&orderBy=id&orderDir=ASC`

### Query Parameters:
- `filter`: (optional) Filter criteria for the emails (e.g., `{"to": "email@gmail.com"}`).
- `limit`: The number of emails to retrieve per page (default is 10).
- `page`: The page number for pagination (default is 1).
- `orderBy`: The field to sort by (e.g., `id`, `subject`).
- `orderDir`: The direction of the sort (e.g., `ASC` or `DESC`).

### Example URL:
http://localhost:3001/email?filter=%7B%7D&limit=10&page=1&orderBy=id&orderDir=ASC

## Tech Stack
The project utilizes several open-source technologies to provide a rich user experience:

- [React-Admin](https://marmelab.com/react-admin/Demos.html): A powerful tool for building CMS
 applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed language for better maintainability.
- [React Hook Form](https://react-hook-form.com/): For handling forms with ease.

## Installation

To ensure the correct Node.js version, this project uses an `.nvmrc` file. If you are using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager), you can run the following command to automatically use the appropriate version:


## Project Installation Front-End

Follow these steps to set up the project:

1. Copy the example environment file and create your `.env`:

   ```sh
   cp .env.example .env
2. Set env variables in .env file:
    ```sh
    NEXT_PUBLIC_API_URL=http://localhost:3001
    ```
Install the dependencies:

```sh
npm i
```
Start the development server:

```sh
npm run dev
```

## Project Installation Back-End

Follow these steps to set up the project:

1. Copy the example environment file and create your `.env`:

   ```sh
   cp .env.example .env
2. Set env variables in .env file:
    ```sh
    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    ```
Install the dependencies:

```sh
npm i
```
Start the development server:

```sh
npm run dev
```