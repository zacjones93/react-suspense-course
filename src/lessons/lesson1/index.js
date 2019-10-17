import React from "react";
//import Pokemon from "./pokemon";

const Pokemon = React.lazy(() => import("./pokemon"))

export default function() {
  return (
    <React.Fragment>
      <React.Suspense fallback="...loading pokemon">
        <Pokemon />
      </React.Suspense>
    </React.Fragment>
  );
}
