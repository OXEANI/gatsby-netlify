import * as React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Index = ({data})  => {
  console.log(data);
  return (
    <PrimaryLayout title="Home">
      {data.allMdx.nodes.map((node) => (
        <Post 
          key={node.frontmatter.id} 
          title={node.frontmatter.title} 
          excerpt={node.excerpt} 
          image={node.frontmatter.image}
          readMore={node.fields.slug}/> 
      ))}
    </PrimaryLayout>
    )
}
export default Index;
export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          id
          title
          date
          keywords
          image
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`