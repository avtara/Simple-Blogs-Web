import React from "react"
import { graphql,Link } from "gatsby"
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import '../components/blog.css';

export default ({ data }) => {
  const numPages = Math.ceil(data.allInternalBlogs.totalCount / 4)
  const currentPage = data.allInternalBlogs.pageInfo.currentPage
  const justOne = numPages === 1
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blogs" : (currentPage - 1).toString()
  const nextPage = "blogs/page/"+(currentPage + 1).toString()
  return (
    <Layout>
        <Navbar/>
        <section className="section">
            {data.allInternalBlogs.edges.map(({ node }) => (
            <div className="columns is-centered">
                <div className="column is-9"  style={{marginBottom: 15 +'px'}}>
                  <div className="box">
                    <h6 class="subtitle is-6">{node.createdat}</h6>
                    <h3 class="title is-3">{node.title}</h3>
                    <div className="max-lines" dangerouslySetInnerHTML={{__html: node.content}} />
                      <Link className="" to={"blog/" + node.alternative_id}>
                        <span>Baca Selengkapnya</span>
                      </Link>
                    </div>                 
                </div>
            </div>
            ))}
            {!justOne && 
              <div className="columns is-centered">
                <div className="column is-9"  style={{marginBottom: 15 +'px'}}>
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        {!isFirst && (
                          <Link to={prevPage} className="level-item" rel="prev">
                            ← Previous Page 
                          </Link>
                        )}
                      </div>
                    </div>

                    <div class="level-right">
                    <div class="level-item">
                    {!isLast && (
                      <Link to={nextPage} rel="next">
                        Next Page → 
                      </Link>
                    )}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            }   
        </section>
      </Layout>
    )
  }
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allInternalBlogs(
      sort: { fields: createdat, order: DESC }
      filter: {status: {eq: 1}}
      limit: $limit
      skip: $skip
    ) {
        totalCount
        pageInfo{
          currentPage
        }
        edges {
            node {
              updateat(fromNow: true)
              title
              tags
              status
              createdat(formatString: "MMMM Do, YYYY")
              content
              authorid
              alternative_id
            }
          }
    }
  }
`