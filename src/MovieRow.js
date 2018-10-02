import React from 'react'

class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
          <img className="row" alt="poster" width="250" src={this.props.movie.poster_src}/>
        </td>
        <td>
          <h3 className="boxWhite">{this.props.movie.title}</h3>
          <p className="body">{this.props.movie.overview}</p>
          <input className="button" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default MovieRow