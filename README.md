# Player Card

A project to build player card with data pulled from **static JSON**. There are also image assets e.g. player's image and club badges which are obtained via **CSS image sprite**.  

This project base was scaffolded with a help of Stephen Grinder's ReduxSimpleStarter. 

##Instruction
- `npm install` to update all dependancies
- `node server.js` to start the server
- `npm start` to start the app
- `localhost://8080` address in the browser to access app
- `localhost://3000` address to see served JSON data or e.g. `localhost://3000/Rooney`

##Done
- Setting up **Express server** with /json, /json/:player endpoints
- Adding assets to /data and /assets in public folder
- Installing **redux-promise**
- Installing **axios** for handling AJAX requests
- Resolving **CORS** issue in Express server - adding headers
- Switching to drop-down from search bar

##To be done
- Fixing stats JSON data 'fudged' into player_list.js container at the moment
- Drop down menu options to be based on JSON not fixed - player_list.js container
- Fixing 'Mertesacker' error in console, other options from drop-down works just fine
- Down arrow is not clickable yet, menu to drop down, choice of fonts?
- Updating Webpack and moving CSS classes to Sass
- Review, remove so unused packages, modules from ReduxSimpleStarter
- Is 'Select a player...' correct from UX perspective if player already displayed?

##Preview

![player-card screenshot](https://github.com/maciejk77/player-card/blob/master/public/assets/screenshot.png?raw=true)