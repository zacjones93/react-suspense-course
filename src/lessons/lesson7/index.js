import React from "react";
import ErrorBoundary from "./error-boundary";
import { unstable_createResource as createResource } from "react-cache";
import { PokemonList } from "./pokemon"
const Pokemon = React.lazy(() => import("./pokemon"));

export default function() {
  return (
    <React.Fragment>
      <ErrorBoundary fallback={<h1>...couldn't catch 'em all</h1>}>
        <React.Suspense fallback="Locating pokemon...">
          <Pokemon />
        </React.Suspense>
        <React.Suspense fallback="Gotta catch 'em all...">
          <PokemonList />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}
