# Player Card

A project to build player card with data pulled from static JSON. There are also image assets e.g. player's image and club badges witch are obtained via CSS image sprites.  

This project was scaffolded with a help of Stephen Grinder's ReduxSimpleStater. 

##Instruction

Update all dependancies
`npm install`

Start the server
`node server.js`

Start the app, access at `localhost://8080`
`npm start`


##Done
- Setting up Express server with /json, /json/:player endpoints
- Adding assets to /data and /assets in public folder
- Installing redux-promise
- Installing axios for handling AJAX requests
- Resolving CORS issue in Express server - adding headers
- Switching to drop-down from search bar

##To be done
Applying math calculations on JSON data before rendering
Making sure that {targetImage} will be treated as a string to display image - player_list.js

Fixing stats JSON data 'fudged' into player_list.js container
Drop down menu options to be based on JSON not fixed - player_list.js container

Fixing 'Mertesacker' error in console, other options from drop-down work fine
Adding club badges - CSS sprites
Create a Player Card UI