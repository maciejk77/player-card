# Player Card in React/Redux, Express.js server

A project to build player card with data pulled from **static JSON**. There are also image assets e.g. player's image and club badges which are obtained via **CSS image sprite**.  

This project base was scaffolded with a help of Stephen Grinder's ReduxSimpleStarter. 

[***This app was rewritten from scratch to newer version here***](https://github.com/maciejk77/player-card-react) to use minimal set up of **create-react-app**, Sass, cleaner/more compact code, ES6 destructuring, Flex

Overall I managed to build clean UI close to the mockup provided. Club badges are implemented correctly via CSS classes and image sprite. Data is fetched with **axios**, served through **Express server**. 

## Instruction
- `npm install` to update all dependancies
- `node server.js` to start the server
- `npm start` to start the app
- `localhost:8080` address in the browser to access app
- `localhost:3000` address to see served JSON data or e.g. `localhost:3000/Rooney`

## Preview
<img src="https://github.com/maciejk77/player-card/blob/master/public/assets/screenshot.png?raw=true" width="45%" height="45%" />

## Done
- Setting up **Express server** with /json, /json/:player endpoints
- Adding assets to /data and /assets in public folder
- Installing **redux-promise**
- Installing **axios** for handling AJAX requests
- Resolving **CORS** issue in Express server - adding headers
- Switching to drop-down from search bar

## Version-B

- Robust code which won't break if JSON elements are reshuffled
- 'Mertesacker issue' (on master branch) is resolved by helper array filtering only the values which are needed to display on UI and not throwing an error if not available.
- Math calculations on last two stats and rendering to the screen - to be completed (TBC) player_list include getStats method to be refactored which maps stats collection to new key value pair { name: value } i.e. { goals: 8 }, work to be done on accessing that object by obj.goals / obj['goals'] to retrieve value for math calculations and final rendering by template strings)

## Master

- Correct calculations for stats i.e. goals for match (but fragile where [0]-th, [1]-st element can return unexpected errors if JSON stats element are reshuffled) 
- 'Mertesacker issue' is connected to some of the stats not available and throwing an error, because of [8]-th element on the array is not available for this player. As mentioned above 'fragile' implementation, won't scale.

## Things to consider

- Select a player... with Alderweider on the mock up is not correct from UX standpoint
- Ideally in above case app should include not available image (outline of a player see an example in public/assets), and placeholders for Name, Surname, Position, Club etc.
- Badges will appear only for class names which are made of 1 or 2 words e.g. Arsenal/Mancherster City if JSON had i.e. Gremio Porto Allegre that would throw an error and more robust method need to be implemented, not a big challange to refactor that though 
