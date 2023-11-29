# Blog Application

A web application for Blog information.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up the Database](#setting-up-the-database)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a COVID-19 portal that provides information about the current situation of the pandemic. It includes features such as user authentication, blog posts, and external API integration.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/covid19-portal.git
   cd covid19-portal
   ```

- Install dependencies:
  npm install

# Setting Up the Database

- navigate to the db/ directory
  cd db

- Execute the SQLite schema file:
  sqlite3 blog.db < schema.sql

# Running the Application

Start the Express.js Server:
npm start

# Start the React.js Client:

cd client
npm start

# Folder Structure

covid19-portal/
|-- client/
| |-- public/
| |-- src/
| |-- package.json
|-- db/
|-- server/
| |-- app.js
| |-- package.json
|-- .gitignore
|-- package.json
|-- README.md
|-- schema.sql

# Technologies Used

Node.js
Express.js
React.js
SQLite
