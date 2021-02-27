import { Row, Col } from 'react-bootstrap';
import { AuthorIntro, CardItem, CardListItem, Layout, FilteringMenu } from 'components';
// SWR - Stale-While-Revalidate => Provide data from cache, while the req sent in parallel will fetch the updated data adn update the UI with-
//- with latest data, once res arrives
import useSWR from 'swr';

import { getAllBlogs } from '../lib/api';
import { useState } from 'react';

// Making a req to fetch more blogs througha useEffect(()=>{},[]) will throw a CORS error
// This fn() will will make a call ti lib/api, which will be executed in the server => preventing CORS error
const fetcher = url => fetch(url).then(res => res.json());

export default function Home({blogs}){
  // debugger;
  const [ filter, setFilter ] = useState({
    view: { list: 0  }
  });

  const { data, error } = useSWR('/api/hello', fetcher);
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
            {/* <Col md="10">
              <CardListItem />
            </Col> */}
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
  const blogs = await getAllBlogs();
  return{
    props:{
      blogs
    }
  }
}
// Though the pages generated are static, there can be an additional functionality(ies) that can be executed on the clientside.
// The static rendered HTML content comes along with a js <script>, holding the props. This will be provided to the page-
//- which will be reexecuted with the <script> on the clientside 
