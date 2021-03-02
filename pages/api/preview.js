import { getBlogBySlug } from "lib/api"

export default async function enablePreview(req, res) {

    if(req.query.secret !== process.env.SANITY_STUDIO_PROJECT_SECRET || !req.query.slug){
        return res.status(401).json({ message: 'Invalid Token' })
    }

    const blog = await getBlogBySlug(req.query.slug);
    
    if(!blog){
        return res.status(401).json({ message: 'Invalid Slug' })
    }

    // setPreviewData() will set some cookies in the browser, which will inform NextJS as to display the page in-
   //- preview mode
   // Cookies => __next_preview_data  |  __prerender_bypass
    res.setPreviewData({});
    res.writeHead(307, {Location: `/blogs/${blog.slug}`});
    res.end();
    
    return res.status(200).json({ message: 'You may proceed...' })
}
