import React, { Component } from "react";
import UpcomingFilm from "./UpcomingFilm";

class UpcomingFilmsList extends Component {
  render() {
      const upcomingFilmsNodes = this.props.data.map(film => {
        return (
          <UpcomingFilm name={film.name} url={film.url}
          key={film.id}>
          </UpcomingFilm>
        );
      });
      return (
        <div className="upcoming-film-list">
          {upcomingFilmsNodes}
        </div>
      )
  }
}

export default UpcomingFilmsList;
