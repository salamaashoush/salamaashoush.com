import Link from "gatsby-link";
import * as React from "react";

export const Header = () => (
  <div>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Gatsby
      </Link>
    </h1>
  </div>
);
