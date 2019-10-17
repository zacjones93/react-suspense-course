import React, { unstable_SuspenseList as SuspenseList } from "react";
import ErrorBoundary from "./error-boundary";
import { PokemonList } from "./pokemon";
const Pokemon = React.lazy(() => import("./pokemon-detail"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
        <SuspenseList revealOrder="together">
          <React.Suspense fallback="Locating pokemon...">
            <Pokemon id={4}/>
          </React.Suspense>
          <React.Suspense fallback="Gotta catch 'em all...">
            <PokemonList
            as="ul"
            renderItem={pokemon => (<li key={pokemon.name}>{pokemon.name}</li>)} />
          </React.Suspense>
        </SuspenseList>
      </ErrorBoundary>
    </React.Fragment>
  );
}
