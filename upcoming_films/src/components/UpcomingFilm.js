import React, { Component } from "react";

class UpcomingFilm extends Component {
  render() {
    return (
      <div className="upcoming-film">
        <p>{this.props.children}</p>
        <a href={this.props.url}>{this.props.name}</a>
        <p>{this.props.id}</p>
        {/*<p>{this.props.url}</p>*/}
      </div>
    )
  }
}

export default UpcomingFilm;
