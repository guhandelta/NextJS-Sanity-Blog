import { Row, Col } from 'react-bootstrap';
import { AuthorIntro, CardItem, CardListItem, Layout } from 'components';

import { getAllBlogs } from '../lib/api';

export default function Home({blogs}){
  return (
    <Layout>
      <hr />
      <div className='blog-detail-page'>
        <Row>
          <Col md="8">
            <AuthorIntro />
          </Col>
        </Row>
        <hr/>
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            {/* <Col md="10">
              <CardListItem />
            </Col> */}
            {
              blogs.map(({title, subtitle, slug}) => <Col key={slug} md="4"> <CardItem title={title} subtitle={subtitle} /> </Col>)
            }
          </Row>
        </div>
      </div>
    </Layout>
      
  
  )
}

// This function is called during Build Time, on the server and never called on the client 
// Provides props to the page and builds a static page
// During each Recompile, the getStaticProps() creates a new index.HTML file for index.js
export async function getStaticProps(){
  const blogs = await getAllBlogs();
  return{
    props:{
      blogs
    }
  }
}
