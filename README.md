# View project here:
[testmeflashcards](https://testmeflashcards.netlify.com/)

## About project
This is a flashcard app that allows a user to add terms and definitions to the app, and then test themselves by shuffling the cards randomly or reviewing each one by one in order.

This app uses the [myjson.com API](myjson.com), which is a simple JSON store to keep your data. It returns a unique uri that you can then call on using GET, POST, and PUT in order to do all 4 CRUD requests.

Data is not secure as the uri is available to the browser. The uri is stored in a browser cookie. I used the react-cookie library to do this.

## How to run (directions sourced from Create React App)
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Other sources
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Libraries used:
- react-bootstrap
- react-router-dom
- react-cookie
- react-fontawesome
