import sanityClient from './sanity';

const blogFields = `
title, 
subtitle, 
slug,
date,
'author': author->{name,'avatar': avatar.asset->url},
'coverImage': coverImage.asset->url
`
/* url to the coverImage is available under the asset prop, while for author, nothing as an asset needs to be asccessed, sa the _ref is available
under author by default | {} -> specify only the required data */ 

export async function getAllBlogs(){
    const res = await sanityClient
          .fetch(`*[_type == "blog"]{${blogFields}}`); 
          //The data in {} after the [] is called projection, it's used to filter out the data from the query response
    return res;
}