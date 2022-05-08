# NodeJS Boilerplate

### Node JS Boilerplate using plain javascript

`api/`

`- controllers/`

`- helpers/`

`- middlewares/`

`- models/`

`- routes/`

`- config/`

`- .env-example`

`- app.js`

`api/` - Houses most of all the controllers, helpers middlewares, models and routes mostly business logic stuff.

`controllers/` Controllers that are responsible for doing the actual request once an api has been called. separated them from the routes folder because it is much cleaner. Usually imported inside the routes folder depending on which route we are working on.

`helpers/` Mostly small functions that can be imported anywhere to do some small tasks, i.e generate a random 6 digit number for otp’s as an example.

`middlewares/` Houses most of the errorHandlers, schemaValidators for joi schema related validations, and tokenValidators for user authentication.

`models/` Houses most of the Model Schema’s .

`routes/` Houses most of the api routes that are responsible for the CRUD operations, this is where we import most of our respective controllers depending on which routes we are working on.

`config/` - Houses most of the server configs i.e db configs, server configs

`.env-example` - Most of the environment variables are set here whenever we do a new project, to call the environment variable, `dotenv` must be installed via yarn or npm

`app.js` - Main app file for initial setup

`app.js` - Main app file for initial setup
