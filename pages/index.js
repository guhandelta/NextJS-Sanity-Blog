import { Row, Col, Media, Image, } from 'react-bootstrap';
import { CardItem, CardListItem, Layout } from 'components';

export default function Home(){
  return (
    <Layout>
      <div className='blog-detail-page'>
        <Row>
          <Col md="8">
            <Media className="mb-4 admin-intro">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="./images/EC.jpg"
                alt="Generic placeholder"
              />
              <Media.Body className="">
                <h5 className="font-weight-bold mb-0">Hello,</h5>
                <p className="welcome-text">
                &ensp;&ensp;I am Guhaprasaanth and welcome to my blog
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <hr/>
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <CardListItem />
            </Col>

            <Col md="4">
              <CardItem />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
      
  
  )
}


