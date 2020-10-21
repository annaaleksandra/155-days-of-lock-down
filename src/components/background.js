import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import backgroundStyles from '../components/background.module.scss'
import Header from '../components/header'

const BackgroundSection = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { 
        eq: "edinburgh.png" }) 
        {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const randomDay = Math.floor(Math.random() * Math.floor(156));
  let url = `/day${randomDay}`.replace(/\s/g, '');
  
  return (
    <BackgroundImage 
        fluid={data.file.childImageSharp.fluid}
        className={backgroundStyles.img}
        >
        <Header />
        <div className={backgroundStyles.text}>
            <h2 className={backgroundStyles.bigTitle}>How would you spend almost a half of year 
                if you couldn't go to work or see your family?</h2>
            <h2 className={backgroundStyles.smallTitle}>How would you spend 
            almost a half of year 
            if you couldn't go to 
            work or see your family?</h2>
            <button className={backgroundStyles.button}>
              <Link className={backgroundStyles.link} to={url}>Random Day</Link>
            </button>
        </div>

    </ BackgroundImage>
  )
}

export default BackgroundSection