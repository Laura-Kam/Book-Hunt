# Book Hunt

This app is a single page, dynamically rendered React portfolio. It allows users to search books and save their favourite titles.

# Description

- AS AN avid reader
  I WANT to search for new books to read
  SO THAT I can keep a list of books to purchase

GIVEN a book search engine

- WHEN I load the search engine
  THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
- WHEN I click on the Search for Books menu option
  THEN I am presented with an input field to search for books and a submit button
- WHEN I am not logged in and enter a search term in the input field and click the submit button
  THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
- WHEN I click on the Login/Signup menu option
  THEN a modal appears on the screen with a toggle between the option to log in or sign up
- WHEN the toggle is set to Signup
  THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
- WHEN the toggle is set to Login
  THEN I am presented with two inputs for an email address and a password and login button
- WHEN I enter a valid email address and create a password and click on the signup button
  THEN my user account is created and I am logged in to the site
- WHEN I enter my account’s email address and password and click on the login button
  THEN I the modal closes and I am logged in to the site
- WHEN I am logged in to the site
  THEN the menu options change to Search for Books, an option to see my saved books, and Logout
- WHEN I am logged in and enter a search term in the input field and click the submit button
  THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
- WHEN I click on the Save button on a book
  THEN that book’s information is saved to my account
- WHEN I click on the option to see my saved books
  THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
- WHEN I click on the Remove button on a book
  THEN that book is deleted from my saved books list
- WHEN I click on the Logout button
  THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Table of Contents

- [Technologies used](#technologies-used)
- [How to install](#how-to-install)
- [Usage](#usage)
- [License](#license)
- [Screenshot](#screenshot)
- [Bugs](#bugs)
- [Version History](#Version-history)
- [Links to repo and heroku](#links-to-repo-and-heroku)
- [Contributing](#contributing)
- [LiveURL](#liveurl)
- [Contact](#contact)

## Technologies used

![Technologies-used](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-Express-000000?logo=Express&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Technologies-used](https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=white)
![Technologies-used](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)

## How to install

In the terminal in the root folder, start by typing "npm i". This will install all the dependencies. Then run 'npm run build' and 'npm run develop'. To run the app, 'npm start'.

## Usage

Through 'npm start', the local host server will start on local host 3000.

## License

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=GitHub&logoColor=white)

## Screenshot

![screenshot](https://user-images.githubusercontent.com/104718053/204141083-438ec03f-6a68-42a4-b7f5-2d7f23c238a5.png)

## Bugs

- useMutation hooks incorrectly rendered

- Bug fixed.

## Version history

- 0.1 Auth middleware function set up to work with GraphQL API
- 0.2 Implemented Apollo Server and applied it to Express server as middleware.
- 0.3 Exported TypeDefs and resolvers, and definied the query and mutation functionality to work with Mongoose Models.
- 0.4 Schemas set up with Query, Mutation, Book, Auth and User types.
- 0.5 Front end files configured to work with Mutation and Query Hooks.

## Links to repo and heroku

[Github Repository](https://github.com/Laura-Kam/Book-Hunt/)

[LiveURL](https://obscure-woodland-85890.herokuapp.com/)

## Contributing

To contribute to the repository yourself please:

Git clone the repository, work on the code, then make a pull request.

## Contact

If you have any questions, or would like to get in touch find me on GitHub [Laura-Kam](https://github.com/Laura-Kam)
or email me at laura_ek@yahoo.co.uk.
