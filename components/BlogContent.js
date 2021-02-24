import BlockContent from '@sanity/block-content-to-react';
import { CodeHighlighter } from '../components';

const serializers = {
    types:{
        code: ({ node: { language, code, filename } }) => {
            return(
                <CodeHighlighter language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </CodeHighlighter>
            )
        }
    }
}


const BlogContent = ({ content }) => {
    return (
        <>
            <BlockContent
                imageOptions={{ w:320, h:240, fit: 'max' }}
                serializers={serializers}
                blocks={content}
            />
        </>
    )
}

export default BlogContent
