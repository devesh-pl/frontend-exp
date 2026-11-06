# JavaScript Mini Project: Form Validation and Notifications

A beginner-friendly project using plain HTML, CSS and JavaScript.

## Features

1. Name validation (minimum 2 characters).
2. Basic email format validation.
3. Message validation (minimum 10 characters).
4. Live message character counter.
5. Live activity status while typing.
6. Success and error toast notifications.
7. Optional browser notification permission demo.

## Run the project

### Option 1: Open directly
Open `index.html` in a modern browser.

### Option 2: VS Code Live Server
Open this folder in VS Code, install the Live Server extension if needed,
right-click `index.html`, and choose **Open with Live Server**.

## Files

- `index.html` — page structure and form fields.
- `style.css` — layout, colours, responsive styling and toast animation.
- `script.js` — validation, event listeners, live updates and notifications.

## Try these tests

1. Submit the form empty.
2. Enter a one-character name.
3. Enter an invalid email such as `hello`.
4. Enter a message shorter than 10 characters.
5. Enter valid details and submit.
6. Type in the message box and watch the character count and activity status.
7. To test browser notifications, open the browser developer console and run:
   `enableBrowserNotifications()`

## Important limitation

This is a frontend learning demo. A successful submission is only logged in the
browser console. It is not emailed, stored in a database, or sent to a backend.
Real applications should submit data to a secure backend API and validate it
again on the server.
