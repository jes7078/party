import React, {useState, useEffect} from 'react'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'
import Movielist from './components/Movielist'


const App = () => {
  const [movies,setMovies] = useState([])

const getDataFromAPI = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a6beb2099267f6ab31335812daa5e50a'
  )

  // const data = await resp.json()
  // console.log(response.data)
  setMovies(resp.data.results)
  console.log(resp.data.results)
  console.log(movies)
}

useEffect(() => {
  console.log('using the effect')
  getDataFromAPI()
},[])



  return (
    <>
    <section>
    <h1 id="title">Movies</h1>
      {movies.map(movie => {

        return (
          <Movielist
          key={movie.id}
          name={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          />
        )
         } )}
      
         </section>


    </>
  )
}

export default App
