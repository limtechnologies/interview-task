# Interview Task 1

## Task Overview

This is a command-line application that interfaces with an existing API to search for books and retrieve information about their authors. The application prompts the user for a book title, searches for the book using an API, and displays the book's details if found. It continues to prompt the user for input and repeats the process indefinitely.

## Requirements

- Node.js
- npm

## Setup Instructions

1. Clone the repository:

   ```bash
   cd <repository-directory>
   cd <interview-task-two->
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node .
   ```

The server will be running on `http://localhost:3000`.

## Functionality

### 1. User Interaction

- Prompts the user to enter a book title.
- Displays the book's details if found.
- Repeats the process indefinitely.

### 2. Book Search

- Method: POST
- Body: JSON object containing title (book title to search for)

### 3. Author Details

- Method: GET
- Response: JSON object containing the author details

```
Enter a book title: The Lord Of The Flies
Title: The Lord Of The Flies
Description: William Golding's 1954 novel Lord of the Flies tells the story of a group of young boys who find themselves alone on a deserted island
Authors: Joshua B. Beatty, Jane D. Doe

Enter a book title: Random Title
Book not found.

Enter a book title: ...
```

## Project Files

- `index.js`: Main server file implementing the endpoints.
- `package.json`: Contains project metadata and scripts.

## Usage Example

1. Start the server:

   ```bash
   node .
   ```
