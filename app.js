let express = require('express') 
 // express module


let app = express()
 // app is the new express application with all methods of express name: app as convention
let port = 8080


// views

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))


let routes = require('./routes')

// Routes

// Home
app.get('/', routes.home)

// movie_single

app.get('/star_wars_episode/:episode_number?', routes.movie_single)

// notFound
app.get('*', routes.notFound)

// assigning port
// app.listen(port) development

// Production
app.listen(process.env.PORT || port)