import { Row, Col } from 'react-bootstrap';
import { AuthorIntro, CardItem, CardListItem, Layout } from 'components';

import { getAllBlogs } from '../lib/api';

export default function Home({blogs}){
  debugger;
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
              blogs.map(({title, subtitle, slug, date, coverImage}) => 
                <Col key={slug} md="4"> 
                  <CardItem 
                    title={title} 
                    subtitle={subtitle} 
                    date={date} 
                    image={coverImage}  
                  /> 
                </Col>)
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
// Though the pages generated are static, there can be an additional functionality(ies) that can be executed on the clientside.
// The static rendered HTML content comes along with a js <script>, holding the props. This will be provided to the page-
//- which will be reexecuted with the <script> on the clientside 
