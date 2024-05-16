# Interview Task

## Task Overview

This project implements a basic web server and website with the following functionality:

1. A single page displaying a number count and a button to increment the count.
2. The count persists across page reloads.
3. An API endpoint to increment the count by a specified value.
4. An API endpoint to retrieve the current count.

## Requirements

- Node.js
- npm

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will be running on `http://localhost:3000`.

## Functionality

### 1. Root Endpoint ("/")

- Displays a number count starting at 0 and a button.
- The count persists across page reloads.
- Clicking the button increments the count by 1.

### 2. Increment Endpoint ("/increment")

- **Method:** POST
- **Body:** JSON object containing `value` (number to increment the count by)
  ```json
  {
    "value": 1
  }
  ```
- **Response:** JSON object containing the new count
  ```json
  {
    "count": 1
  }
  ```
- Validates the body and returns an error for invalid input.

### 3. Count Endpoint ("/count")

- **Method:** GET
- **Response:** JSON object containing the current count
  ```json
  {
    "count": 1
  }
  ```

## Project Files

- `index.js`: Main server file implementing the endpoints.
- `package.json`: Contains project metadata and scripts.

## Usage Example

1. Start the server:

   ```bash
   npm start
   ```

2. Open `http://localhost:3000` in your browser.
3. Click the button to increment the count.
4. Use a tool like `curl` or Postman to test the API endpoints.

### Example CURL Commands

- Increment the count:

  ```bash
  curl -X POST http://localhost:3000/increment -H "Content-Type: application/json" -d '{"value": 1}'
  ```

- Get the current count:
  ```bash
  curl http://localhost:3000/count
  ```

## Notes

- The project uses vanilla JavaScript, HTML, and CSS for the front-end.
- No UI framework like React or Vue is used.
