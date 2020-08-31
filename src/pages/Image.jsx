import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Gatsby Docs are awesome"
    />
  )
}
