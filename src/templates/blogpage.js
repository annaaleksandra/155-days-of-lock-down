import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import BlogpageStyles from '../components/blogpage.module.scss'
import Header from '../components/header'

export const query = graphql`
    query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug} }) {
      frontmatter {
        title
        date
        id
      }
      html
    }
  }
  `
const BlogPage = ({ data, pageContext }) => {
  let date = data.markdownRemark.frontmatter.date
  let dateSplit = date.split("-")

  //Gives days their order ending
  let day = ""
  if (dateSplit[0] === "01") {
    day = "1st"
  } else if (dateSplit[0] === "02") {
    day = "2nd"
  } else if (dateSplit[0] === "03") {
    day = "3rd"
  } else {
    day = dateSplit[0] + "th"
  }

  //Gives the months their respective names
  let month = " "
  if (dateSplit[1] === "03") {
    month = "March"
  } else if (dateSplit[1] === "04") {
    month = "April"
  } else if (dateSplit[1] === "05") {
    month = "May"
  } else if (dateSplit[1] === "06") {
    month = "June"
  } else if (dateSplit[1] === "07") {
    month = "July"
  } else if (dateSplit[1] === "08") {
    month = "August"
  }

  const next = pageContext.next
    ? {
      url: `/${pageContext.next.fields.slug}`,
      title: pageContext.next.frontmatter.title
    }
    : null

  const prev = pageContext.prev
  ? {
    url: `/${pageContext.prev.fields.slug}`,
    title: pageContext.prev.frontmatter.title
  }
  : null

    return (
        <Layout>
          <Header />

          <div className={BlogpageStyles.container}>
            <div className={BlogpageStyles.links}>
              {prev && (
                <Link className={BlogpageStyles.left} to={prev.url}>
                  <span className={BlogpageStyles.span} >Previous</span>
                  <h3 className={BlogpageStyles.subtitle}>{prev.title}</h3>
                </Link>
              )}
              {next && (
                <Link to={next.url}>
                  <span className={BlogpageStyles.span} >Next</span>
                  <h3 className={BlogpageStyles.subtitle}>{next.title}</h3>
                </Link>
              )}
            </div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p className={BlogpageStyles.date}>{month} {day} {dateSplit[2]}</p>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
          </div>
        </Layout>
    )
}

export default BlogPage