
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class ReadPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <Container>
          <Box>
            <H1>Latest From the Blog</H1>
          </Box>
          {posts
            .map(({ node: post }) => (
              <Box
                style={{ border: '1px solid #eaecee', padding: '2em 4em', margin: '1em 0' }}
                key={post.id}
              >
                <P color={color.yellow[0]}>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </P>
                <P>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </P>
              </Box>
            ))}
        </Container>
      </section>
    )
  }
}

ReadPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
