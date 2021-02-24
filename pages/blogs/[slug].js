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

export async function getServerSideProps({ params }){
    const blog = await getBlogBySlug(params.slug);
    return{
        props: { 
            blog
         }
    }
}

export default BlogDetail;