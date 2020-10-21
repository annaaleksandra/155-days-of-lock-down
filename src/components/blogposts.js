import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogpostStyles from './blogposts.module.scss'

const BlogPosts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark 
            (sort: {fields: [frontmatter___id], order: ASC })
            {
                edges {
                    node {
                        frontmatter {
                            title
                            id
                        }
                        fields {
                            slug
                        }
                        excerpt
                    }
                }
            }
        }
    `)

    return (
        <div className={blogpostStyles.container}>
            <ul className={blogpostStyles.grid}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li key={edge.node.frontmatter.id} className={blogpostStyles.post}>
                            <Link className={blogpostStyles.text} to={`/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <h3>Day {edge.node.frontmatter.id}</h3>
                                <p>{edge.node.excerpt}</p>
                                <div className={blogpostStyles.buttondiv}>
                                    <button>Keep reading...</button>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BlogPosts