import { Row, Col } from 'react-bootstrap';
import { Layout, BlogHeader } from '../../components';
import { getBlogBySlug, getAllBlogs } from '../../lib/api';

// const BlogDetail = ({ title, subtitle, coverImage, date, author }) => {
const BlogDetail = ({ blog }) => {
    debugger;
    return (
        <Layout>
            <Row>
                <Col md={{ span:10, offset: 1 }}>
                    <BlogHeader 
                        title={blog?.title}
                        subtitle={blog?.subtitle}
                        coverImage={blog?.coverImage}
                        author={blog?.author}
                        date={blog?.date}
                    />
                    <hr/>
                </Col>
            </Row>
        </Layout>
    )
}

export async function getStaticProps({ params }){
    const blog = await getBlogBySlug(params.slug);
    return{
        props: { 
            blog
        }
    }
}

// If a page has dynamic routes (documentation) and uses getStaticProps it needs to define a list of paths that have to be rendered to HTML at build time.
// If you export an async function called getStaticPaths from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
// getStaticPaths() will be called for/exe on each page
export async function getStaticPaths(){
    const blogs = await getAllBlogs();
    // const paths =  blogs?.map(blog=>({params: {slug: blog.slug}}));
    return {
        paths: blogs?.map(blog=>({params: {slug: blog.slug}})),
        fallback: false // returning fallback is mandatory, false => land on the default 404 page if page not found
    }
}

export default BlogDetail;