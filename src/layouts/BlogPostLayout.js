import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SEO from "../components/SEO";

const BlogPostLayout = ({data}) => {
    const post = data.mdx;

    return (
        <div>
            <SEO
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                description={post.excerpt}

            />
            <Header/>
            <div className="container pt-3">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1>{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.body}}/>
                    </Col>
                </Row>
            </div>
        <Footer/>
    </div>
  )
  
}

export default BlogPostLayout

export const query = graphql `
    query($slug: String!) {
        mdx(fields: {slug: {eq: $slug}}) {
            body
            excerpt
            frontmatter {
                title
                image
            }
        }
    }
`