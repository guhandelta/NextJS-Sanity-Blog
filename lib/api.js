import sanityClient from './sanity';

const blogFields = `
title, 
subtitle, 
slug
`

export async function getAllBlogs(){
    const res = await sanityClient
          .fetch(`*[_type == "blog"]{${blogFields}}`); 
          //The data in {} after the [] is called projection, it's used to filter out the data from the query response
    return res;
}