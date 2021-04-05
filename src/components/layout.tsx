import { Global, css } from "@emotion/react"
import React, { FC } from "react"
import { Header } from "./header"
export const Layout: FC<any> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          html,
          body {
            margin: 0;
            color: #555;
            font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 18px;
            line-height: 1.4;
            /* remove gatsby div styling */
            > div {
              margin-top: 0;
              color: red;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              line-height: 1.1;
              + * {
                margin-top: 0.5rem;
              }
            }
            strong {
              color: #222;
            }
            li {
              margin-top: 0.25rem;
            }
          }
        `}
      />
      <Header></Header>
      <main
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  )
}
