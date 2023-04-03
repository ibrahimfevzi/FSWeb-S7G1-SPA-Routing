import React from "react";

export default function FilmListesi(props) {
  function FilmDetayları({ movie }) {
    const { title, director, metascore } = movie;

    return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
