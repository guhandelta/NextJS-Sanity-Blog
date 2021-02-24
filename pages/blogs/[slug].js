import { Layout } from '../../components';
import { getBlogBySlug } from '../../lib/api';

const BlogDetail = ({ blog }) => {
    debugger;
    return (
        <Layout>
            <h1>Detail page for {blog?.slug}</h1>
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
export function getStaticPaths(){
    console.log('====================================');
    console.log('Getting paths for every page');
    console.log('====================================');
    return{
        paths:[
            {params: {
                slug: 'my-first-blog'
            }},
            {params: {
                slug: 'my-second-blog'
            }},
            {params: {
                slug: 'my-third-blog'
            }},
        ],
        fallback: false // returning fallback is mandatory, false => land on the default 404 page if page not found
    }
}

export default BlogDetail;