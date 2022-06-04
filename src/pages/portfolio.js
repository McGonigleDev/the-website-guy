import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

export default function IndexPage({ data }) {

    return (
        <Layout>
            <div className='grid grid-cols-1 2xl:grid-cols-2 container mx-auto gap-8'>
                {data.allWpPost.edges.map(({ node }) => (
                    <div className='flex flex-col md:flex-row items-center md:items-start border border-gray-200 bg-white shadow-xl rounded-md p-4'>
                        <h1 className='block md:hidden'>{node.title}</h1>
                        <div className='w-full md:w-1/2 '>
                            <GatsbyImage
                                image={node.featuredImage.node.gatsbyImage}
                            />
                        </div>
                        <div className='text-center md:text-left w-full md:w-1/2 flex flex-col gap-4 p-4'>
                            <h1 className='hidden md:block font-extrabold text-3xl 2xl:text-xl text-slate-700 self-start underline-offset-auto underline '>{node.title}</h1>
                            <h2 className='mt-4 font-bold text-md'>Project Details:</h2>
                            <article
                                className='prose:'
                                dangerouslySetInnerHTML={{ __html: node.content }}
                            />
                            <div className='prose'>
                                <p>{node.tags.nodes.name}</p>
                            </div>
                            <button className='flex justify-start mt-4'>
                                <a href={node.portfolio.projectLink} class="relative inline-block text-lg group ">
                                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span class="relative">Visit Website</span>
                                    </span>
                                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyPortfolio {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Portfolio"}}}}}) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              gatsbyImage(layout: FULL_WIDTH, width: 800)
            }
          }
          portfolio {
            projectLink
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`