import React from "react";
import { unstable_createResource as createResource } from "react-cache";

let PokemonResource = createResource((id) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
);

export function Pokemon({ id }) {
  return <div>{PokemonResource.read(id).name}</div>;
}

let PokemonCollection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
);

export function PokemonList({renderItem, ...props}) {
  return (
    <props.as>
      {PokemonCollection.read().results.map(renderItem)}
    </props.as>
  );
}
PokemonList.defaultProps = {
    as: React.Fragment,
    render: pokemon => (<div key={pokemon.name}>{pokemon.name}</div>)
  }
