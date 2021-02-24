import { useEffect, createRef } from 'react';
import highlight from 'highlight.js';
import { findDOMNode } from 'react-dom';

const CodeHighlighter = ({ children, language }) => {

    const code = createRef();

    useEffect(()=>{
        // findDOMNode() is used to provide the actual element to the highlight.highlightBlock()
        highlight.highlightBlock(findDOMNode(code.current));
    },[])

    return (
        <pre>
            <code 
                ref={code}
                className={language}
            >
                {children}
            </code>
        </pre>
    )
}

export default CodeHighlighter
