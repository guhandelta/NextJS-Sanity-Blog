import { useRouter } from 'next/router';
import { Layout } from '../../components';

const BlogDetail = () => {
    const { query } = useRouter();
    debugger;
    return (
        <Layout>
            <h1>Detail page for {query?.slug}</h1>
        </Layout>
    )
}

export default BlogDetail;