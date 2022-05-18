import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import Search from "./Search";
import { Link } from "react-router-dom";

function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (error) {
    return <div>Something went wrong</div>;
  } else if (loading) {
    return <div>Loading Spinner</div>;
  } else {
    return (
      <div>
        <Search />
        <br></br>
        <div className="characterList">
          {data.characters.results.map((character, index) => {
            return (
              <Link to={`/${character.id}`}>
                <div key={index}>
                  <img src={character.image}></img>
                  <h2>{character.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CharacterList;
