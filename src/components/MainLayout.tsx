import { css, Global } from "@emotion/react"
import React, { FC } from "react"
import Helmet from "react-helmet"
import { useSiteMetaData } from "../hooks/use-sitemetadata"
import { MainHeader } from "./MainHeader"

export const Layout: FC<any> = ({ children }) => {
  const { title, description } = useSiteMetaData()
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
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <MainHeader />
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
export default Layout
