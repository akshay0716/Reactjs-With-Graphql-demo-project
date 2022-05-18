import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARATCERS_USING_SEARCH = gql`
  query getCharacterName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

function Search() {
  const [name, setValue] = useState("");

  const [getCharacters, { data, loading, error, called }] = useLazyQuery(
    GET_CHARATCERS_USING_SEARCH,
    {
      variables: {
        name,
      },
    }
  );

  console.log({ data, loading, error, called });

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(value));
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeHandler}></input>
      <button onClick={() => getCharacters()}>Search</button>
    </div>
  );
}

export default Search;
