import { graphql, useStaticQuery } from 'gatsby';

export default function useImageData() {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `);
  return data.allImageSharp.edges.map((edge) => {
    return edge.node.gatsbyImageData;
  });
}
