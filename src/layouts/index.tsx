import * as React from "react";
import Helmet from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { Header } from "./header";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      />
      <Header />
      <div>{children()}</div>
    </>
  );
};

export default DefaultLayout;
