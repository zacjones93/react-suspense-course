import React from "react";
import ErrorBoundary from "./error-boundary";
import { unstable_createResource as createResource } from "react-cache";
const Pokemon = React.lazy(() => import("./pokemon"));

let PokemonColection = createResource(() =>
  fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
)

function PokemonList () {
  return PokemonColection.read().results.map(pokemon => (
    <div key={pokemon.name}>{pokemon.name}</div>
    ))
}

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback="App level error">
        <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
          <React.Suspense fallback="Locating pokemon...">
            <Pokemon />
          </React.Suspense>
        </ErrorBoundary>

        <br/>

        <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
          <React.Suspense fallback="...loading">
            <PokemonList />
          </React.Suspense>
        </ErrorBoundary>
      </ErrorBoundary>
    </React.Fragment>
  );
}
