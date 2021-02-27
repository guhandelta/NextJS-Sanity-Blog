import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { AuthorIntro, CardItem, CardListItem, Layout, FilteringMenu } from 'components';

import { getAllBlogs } from '../lib/api';
import { useGetBlogs } from '../actions';

export default function Home({blogs: initialData}){
  // debugger;
  const [ filter, setFilter ] = useState({
    view: { list: 0  }
  });

  const { data: blogs, error } = useGetBlogs(initialData);
  if(!blogs) { return 'loading'; }
  debugger;

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
            {
              blogs.map(({title, subtitle, slug, date, coverImage, author}) => 
                filter.view.list ?
                  <Col key={`${slug}-list`} md="9">
                    <CardListItem 
                      title={title} 
                      subtitle={subtitle} 
                      date={date} 
                      author={author}
                      slug={slug}
                      link={{
                        href: '/blogs/[slug]',
                        as: `/blogs/${slug}`
                      }}
                    />
                  </Col>
                  :
                  <Col key={slug} md="4"> 
                    <CardItem 
                      title={title} 
                      subtitle={subtitle} 
                      date={date} 
                      image={coverImage}  
                      author={author}
                      slug={slug}
                      link={{
                        href: '/blogs/[slug]',
                        as: `/blogs/${slug}`
                      }}
                    /> 
                  </Col>
              )
            }
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
