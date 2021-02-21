import { Media, Image, } from 'react-bootstrap';

const AuthorIntro = () => {
    return (
        <>
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
        </>
    )
}

export default AuthorIntro
