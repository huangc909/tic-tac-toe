# Tic-Tac-Toe: A Universal Game

This application allows the user to play the popular game of tic tac toe. I decided to create this game to apply my knowledge of several technologies, specifically JavaScript, jQuery, API and JSON.

## Planning Story

I approached this project by first creating user stories that addressed the rules and requirements needed for a tic-tac-toe game application. Afterwards, I created a wireframe of the game with the needed components, specifically areas to create user accounts, sign in, display the game, get game history, be able to change the password, and sign out.

Once completed, I continued forward to the coding process. Before I went into depth with coding, I started with creating curl-scripts to test out the API and JSON requests in the terminal. When I got the authentication portion (sign up, sign in, change password, and sign out) to successfully run in the terminal, I began to code.

I organzied my code by compartmentalizing each portion of a clickable event into different files. I had a file for the HTML, CSS, click event listeners, click event handlers, AJAX requests to the API, and the user interface. My HTML file contains all of the text and forms I needed for my game application. One of the necessary features is having a user be able to create his/her own account with his/her game history. These included the authentication portion that I had written for the curl-scripts as well as making AJAX requests for the game history.

The most important feature of the applicaiton is the game board, which has nine boxes that are clickable. When a specific box is clicked on, its cell number ID is stored into a variable and used for the click event handler, AJAX request, and to display messages in the user interface. Depending on which boxes are clicked on, if there are three of the same marks ('x' or 'o') selected three in a row, then the game stops running and displays the GAME OVER and result messages.

### Prior to CSS Styling - Sign Up/Sign In Page
![Prior to CSS Styling - Sign Up/Sign In Page](https://i.imgur.com/OWFu7lO.png)

### Prior to CSS Styling - Upon Sign In displays game board
![Prior to CSS Styling - Upon Sign In displays game board](https://i.imgur.com/aGfI81f.png)

### Prior to CSS Styling - A Game that has Ended
![Prior to CSS Styling - A Game that has Ended](https://i.imgur.com/mMGoHsg.png)

### Prior to CSS Styling - When the Game History is Displayed
![Prior to CSS Styling - When the Game History is Displayed](https://i.imgur.com/YN6PXJT.png)


Once the authentication and game logic portions were complete, I worked on stylizing the application. I used Flexbox and Bootstrap to place the application components in a more organized manner. I also inserted several JQuery methods in order to hide and show certain features.

### Sign in
![Sign in](https://i.imgur.com/XTSPMEH.png)

### Toggle to Sign up
![Toggle to Sign up](https://i.imgur.com/ELJColu.png)

### Upon Sign in
![Upon Sign in](https://i.imgur.com/TiYPLfe.png)

### When New Game button is clicked
![When New Game button is clicked](https://i.imgur.com/L4euLlS.png)

### When a game has ended
![When a game has ended](https://i.imgur.com/DDqPfBL.png)

### When Player's Info button is clicked
![When Player's Info button is clicked](https://i.imgur.com/G45nQVg.png)

### When "Display all of your previous games!" button is clicked
![When "Display all of your previous games!" button is clicked](https://i.imgur.com/m4lO9nl.png)

### When Sign Out button is clicked (the message fades away after a few seconds)
![When Sign Out button is clicked (the message fades away after a few seconds)](https://i.imgur.com/uPuN9rm.png)


Whenever I completed a user story feature, I thought about the next step in terms of a goal and asked myself "what skills/knowledge did I already know that could achieve this goal?" If I was not sure how the coding syntax should be written, I searched on Google and turned to my coding community by posting issue requests. I then used the research and feedback to solve the goal while simultaneously improving and furthering my code.

As I worked on this project, I found that I enjoyed thinking about each step logically and how the skills that I already learned could be used to achieve each goal. I also looked forward to the feedback that I got from my community because most of the time, they gave me new perspectives on specific lines of code that I had trouble with. Lastly, I also enjoyed the designing process of the layout by using Flexbox and Bootstrap.

## User Stories
- As a user, I want to sign up for a game account.
- As a user, I want a message to note if I signed up successfully or not.
- As a user, I want to log into my game account.
- As a user, I want a message to note if I logged into my account successfully or not.
- As a user, I want the option to change my password.
- As a user, I want a message to note if my password change was successful or not.
- As a user, I want to be able to log out of my game account.
- As a user, I want a message to note if I logged out successfully or not.
- As a user, I want to get information about my past games.
- As a user, I want to select a box to put my mark down.
- As a user, I want to be able to play against myself.
- As a user, I want a message to note when the game has ended.
- As a user, I want a message to display the final result.

## Technologies Used:
- JavaScript
- jQuery
- API
- JSON
- HTML
- CSS
- Bootstrap

## Unsolved Problems
I would like to eventually:
- Refactor parts of the code to make it simpler in syntax.
- Bring the words “Tic-Tac-Toe” down into the center of its div container.
- Bring the marks “x” and “o” down into the center.
- Have a drop down menu when a “new game” is clicked during a current or an ended game (as seen in my Wireframe Design).
- Display the game results in reverse order so the most current game is on top.
- Make the screen more interactive for smaller screens.

## Tic-Tac-Toe Wireframe
Afterwards, I created a wireframe of the game:
![Tic-Tac-Toe Wireframe](https://i.imgur.com/dfkFLjo.png)
