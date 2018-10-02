import React, { Component } from 'react';
import './Webs.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class Webs extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performpopular("")
  }

  performpopular(popularTerm) {
    console.log("Perform popular using moviedb")
    const urlString = "https://api.themoviedb.org/3/movie/popular?api_key=9537512f2364d1fccb518979a3d893ef&query=" + popularTerm
    $.ajax({
      url: urlString,
      success: (popularResults) => {
        console.log("Fetched data successfully")
        const results = popularResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  popularChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const popularTerm = event.target.value
    boundObject.performpopular(popularTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
              <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="10"/>
            </tr>
          </tbody>
        </table>
      <div>
            <h2>MoviesDB Popular</h2>
      </div>

        {this.state.rows}

      </div>
    );
  }
}

export default Webs;