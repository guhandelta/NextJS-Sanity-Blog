import BlockContent from '@sanity/block-content-to-react';
import { CodeHighlighter } from 'components';
import { urlFor } from 'lib/api';

const serializers = {
    types:{
        code: ({ node: { language, code, filename } }) => {
            return(
                <CodeHighlighter language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </CodeHighlighter>
            )
        },
        image: ({node: { asset, alt }}) =>{
            return(
                <div className="blog-image">
                    {/* asset.url is not necessary, as imageUrlBuilder.image() can extract thr url of the asset by itself || when returned like this,
                    .url() at the end is necessary, to return the URL explicity*/}
                    <img src={urlFor(asset).height(320).fit('max').url()} />
                    <div className="image-alt">
                        {alt}
                    </div>
                </div>
            )
        }
    }
}


const BlogContent = ({ content }) => {
    return (
        <>
            <BlockContent
                serializers={serializers}
                blocks={content}
            />
        </>
    )
}

export default BlogContent
