import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default () => {
  const { title } = useSiteMetadata();
  return (
    <div>
      <h1>Hi people</h1>
      <p>
        Welcome to your new <strong>{title}</strong> site.
      </p>
      <p>Now go build something great.</p>
    </div>
  );
};
