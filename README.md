# Short URL Generator

A simple Node.js application for generating and redirecting short URLs.

## Introduction

This project aims to provide a service for generating short URLs from long URLs and redirecting users to the original long URLs when they access the short URLs.

## Features

- Generate short URLs from long URLs
- Redirect users from short URLs to original long URLs

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Shortid (for generating short IDs)

## Learnings
- Setting up a basic Express.js server
- Handling POST requests to generate short URLs
- Handling GET requests to redirect users to original long URLs
- Connecting to MongoDB using Mongoose
- Using shortid library to generate unique short IDs
- Implementing error handling and logging for better debugging


## Setup

### Install Dependencies

```bash
npm install
```
### Configure Environment Variables
- Create a .env file in the root directory of the project and define the following variables:

```bash
MONGODB_URI=mongodb://localhost:27017/short-url
//Update the MongoDB URI as per your local or remote MongoDB instance.
```

### Start the Server
```bash
npm start
```
- The server should now be running at http://localhost:8001.

### Usage
- Generate Short URL
- To generate a short URL, send a POST request to /url endpoint with the long URL in the request body:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://example.com"}' http://localhost:8001/url
```

### Access Short URL
- To access a short URL and be redirected to the original long URL, simply make a GET request to the short URL:

```bash
curl http://localhost:8001/<shortId>
```





