import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (error) {
    return <div>Something went wrong</div>;
  } else if (loading) {
    return <div>Loading Spinner</div>;
  } else {
    return (
      <div className="character">
        <img src={data.character.image} width={750} height={750}></img>

        <div className="character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="character-episode">
            {data.character.episode.map((episode, index) => {
              return (
                <div key={index}>
                  {episode.name} - <b>{episode.episode}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Character;
