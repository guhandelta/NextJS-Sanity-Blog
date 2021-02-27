import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { AuthorIntro, Layout, FilteringMenu } from 'components';

import { getAllBlogs } from '../lib/api';
import { useGetBlogsPages } from 'actions/pagination';

export default function Home({ blogs }){
  // debugger;
  const [ filter, setFilter ] = useState({
    view: { list: 0 }
  });

  // Created as an alternative to fetching the Blogs using useEffect(), but no longer required here as the same is-
  //- executed in pagination
  // const { data: blogs, error } = useGetBlogs(initialData);

  const { 
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
   } = useGetBlogsPages({ blogs, filter });

  return (
    <Layout>
        <AuthorIntro />
        <FilteringMenu 
          filter={filter}
          onChange={(option, value ) => setFilter({...filter, [option]: value})}
        />
        <hr/>
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            { pages }
          </Row>
      </div>
    </Layout>
      
  
  )
}

// This function is called during Build Time, on the server and never called on the client 
// Provides props to the page and builds a static page
// During each Recompile, the getStaticProps() creates a new index.HTML file for index.js || Request is made from the server
export async function getStaticProps(){
  const blogs = await getAllBlogs({ offset: 0 });
  return{
    props:{
      blogs
    }
  }
}
// Though the pages generated are static, there can be an additional functionality(ies) that can be executed on the clientside.
// The static rendered HTML content comes along with a js <script>, holding the props. This will be provided to the page-
//- which will be reexecuted with the <script> on the clientside 
