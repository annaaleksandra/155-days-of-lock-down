import React from "react"

import Layout from '../components/layout'
import BlogPosts from '../components/blogposts'
import BackgroundSection from '../components/background'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head />
        <BackgroundSection />
        <BlogPosts /> 
      </Layout>
    </div>
  )
}

export default IndexPage
