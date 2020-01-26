import React from "react"
import { graphql } from "gatsby"
import logo from '../images/logo.svg';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import ReactDisqusComments from 'react-disqus-comments';
import '../components/blog.css';



export default ({ data }) => {
  const post = data.internalBlogs
  return (
    <Layout>
        <Navbar/>
        <section className="hero is-info is-medium is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h3 style={{ color: '#1b262c' }} className="title">Selamat Membaca Blog Ini</h3>
                </div>
            </div>
        </section>

        <div className="container">
            <section className="articles">
                <div className="column is-8 is-offset-2">
                    <div className="card article">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-center">
                                    <img src={logo} className="author-image" alt="author"/>
                                </div>
                                <div class="media-content has-text-centered">
                                    <p class="title article-title"> {data.internalBlogs.title}</p>
                                    <p class="subtitle is-6 article-subtitle">
                                        <a href="http://github.com/avtara">{data.internalBlogs.authorid}</a> on {data.internalBlogs.createdat}
                                    </p>
                                    <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">tag</span>
                                    <span class="tag is-rounded">{data.internalBlogs.tags}</span>
                                </div>
                                </div>
                            </div> 
                            <div class="content article-body">
                                <div dangerouslySetInnerHTML={{__html: post.content}} />
                            </div>  
                        </div> 
                    </div> 
                    <br/>
                    <ReactDisqusComments
                        shortname="xxxx" // add your disqus shortname
                    identifier={data.internalBlogs.alternative_id}
                    title={data.internalBlogs.title}
                    />
                </div>
            </section>
        </div>
    </Layout>
  )
}
export const query = graphql`
query($slug:Int!){
    internalBlogs(alternative_id: {eq: $slug}) {
      title
      updateat(fromNow: true)
      tags
      status
      createdat(formatString: "MMMM Do, YYYY")
      authorid
      content
      alternative_id
    }
  }
`
