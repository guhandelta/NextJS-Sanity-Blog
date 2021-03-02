import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import { Layout, BlogHeader, BlogContent, PreviewAlert } from '../../components';
import { getBlogBySlug, getAllBlogs, urlFor } from 'lib/api';

// const BlogDetail = ({ title, subtitle, coverImage, date, author }) => {
const BlogDetail = ({ blog, preview }) => {
    // In normal scenario, when requesting for a page that had not been generated(it does not have a slug), it will-
    //- land in 404 page, but now, the blog will be fetched by it's slug 
    const router = useRouter();
    // Display/Redirect to ErrorPage, if the fallback is false and there is no slug available
    if(!router.isFallback && !blog?.slug) return <ErrorPage status="404" />

    if(router.isFallback){
        console.log('====================================');
        console.log('Loading Fallback Page');
        console.log('====================================');
        return <Layout className="blog-detail-page">
            Loading...
        </Layout>
    }


    return (
        <Layout className="blog-detail-page">
            <Row>
                <Col md={{ span:10, offset: 1 }}>
                    { preview && <PreviewAlert /> }
                    <BlogHeader 
                        title={blog?.title}
                        subtitle={blog?.subtitle}
                        coverImage={urlFor(blog.coverImage).height(400).url()}
                        author={blog?.author}
                        date={moment(blog?.date).format('LL')}
                    />
                    <hr/>
                    {blog?.content &&
                        <BlogContent 
                            content={blog.content}
                        />
                    }
                </Col>
            </Row>
        </Layout>
    )
}

export async function getStaticProps({ params, preview=false, previewData }){ //setting preview, by default to false
    // Pass preview value to getBlogBySlug to fetch the data of draft blog
    const blog = await getBlogBySlug(params.slug, preview);
    return{
        props: { 
            blog,
            preview // To let the user know that they are in the preview mode
        }
    }
}

// If a page has dynamic routes (documentation) and uses getStaticProps it needs to define a list of paths that have to be rendered to HTML at build time.
// If you export an async function called getStaticPaths from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
// getStaticPaths() will be called for/exe on each page
export async function getStaticPaths(){
    const blogs = await getAllBlogs();
    const paths =  blogs?.map(blog=>({params: {slug: blog.slug}}));
    return {
        paths,
        fallback: true // returning fallback is mandatory, false => land on the default 404 page if page not found
        // true => make a req to fetch the blogs, by re-running #32 getStaticProps(), as makes this a fallback-
        //- page 
    }
}

export default BlogDetail;