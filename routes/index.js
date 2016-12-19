
let moviesJson = require('../movies.json')

//home
exports.home = (req, res) => {
    //console.log( process.env.NODE_ENV)
    let movies = moviesJson.movies
   
    //console.log(moviesJson.movies)
    res.render("home", { title:" Star Wars Movies", 
      movies : movies,
      title : "Star Wars World"
        
   })
}
// movie_single

exports.movie_single = (req,res)=> {
    let episode_number = req.params.episode_number
    //res.send(" this the page for episode "+ episode_number)
    let movies = moviesJson.movies

    if (episode_number >= 1 && episode_number <= 8){

        let movie = movies[episode_number-1]
        let title = movie.title
        let main_characters = movie.main_characters
        let image = movie.poster
        let background = movie.hero_image
        
        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters : main_characters,
            image : image,
            background: background
            })

    }else{
        //res.send("Invalid episode number")
        res.render('notFound', {

            movies: movies,
            title : " This is not the page you are looking for"

        })
    }
    
}


// notFound
exports.notFound = (req,res)=> {
    res.send("this is not the page u looking for")
}
