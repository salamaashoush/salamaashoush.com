import { graphql, useStaticQuery } from 'gatsby';
interface SiteMetadata {
  title: string;
}
interface SiteData {
  site: {
    siteMetadata: SiteMetadata;
  };
}
export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery<SiteData>(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
