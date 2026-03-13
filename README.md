# Model MVC Generator for Express

A simple CLI tool for generating a basic MVC module structure for Node.js and Express applications.

This tool automates the creation of common backend layers such as controllers, services, models, and routes. It helps developers quickly scaffold a modular structure following a layered MVC-style architecture.

## Features

* Generates a basic module structure
* Creates controllers, services, models, and routes directories
* Automatically creates starter files for each layer
* Uses a simple CLI command
* Designed for Express-style backend projects

## Installation

Install globally using npm:
```bash
    npm install -g model-mvc

```
Or run directly with npx:

```bash
    npx model-mvc <module-name>
``` 

## Usage

Generate a new module by running:

```bash
    npx model-mvc user
```
This will create the following structure:

src/
user/
controllers/
userController.js
services/
userService.js
models/
userModel.js
routes/
userRoute.js

Each module is grouped by feature, which improves organization and scalability in larger backend applications.

## Architecture

The generated structure follows a layered MVC-style architecture with an additional service layer.

Flow:

Route → Controller → Service → Model → Database

Layer responsibilities:

Controller
Handles HTTP requests and responses.

Service
Contains business logic and application rules.

Model
Responsible for data access and persistence.

Routes
Defines API endpoints and connects them to controllers.

## Requirements

Node.js 16 or higher
npm

## Development

Clone the repository:

```bash
    git clone <repository-url>

```
Install dependencies if needed and link the CLI locally:
```bash
    npm link
```
Now the command will be available globally on your system.
