// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')

const app = express() // initialize app

const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	/* db: { 					// Database configuration. Remember to set env variables in .env file: MONGODB_URI, PROD_MONGODB_URI
		// url: (process.env.TURBO_ENV == 'dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		url: 'mongodb://localhost/footballdb',
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('FOOTBALL DB CONNECTED!')
		}
	} */
}

const mongose = require("mongoose");

/* mongose.connect('mongodb://localhost/footballdb', { useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log('DB Connected');
}); */

mongose.connect('mongodb+srv://admin:admin@rest-api.eavfm.mongodb.net/footballdb?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log('DB Connected');
});

mongose.connection.on(`error`, err =>{
    console.log(`DB connection error: ${err.message}`);
});

vertex.configureApp(app, config) // to use config settings, remove line 23 below and replace with this


//vertex.configureApp(app)
//app.use(vertex.setContext(process.env))


// import routes
const index = require('./routes/index')
const api = require('./routes/api') // sample API Routes

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app