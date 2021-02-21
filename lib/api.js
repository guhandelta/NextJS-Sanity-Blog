import sanityClient from './sanity';

export async function getAllBlogs(){
    const res = await sanityClient
          .fetch(`*[_type == "blog"]{title, subtitle, slug}`); 
          //The data in {} after the [] is called projection, it's used to filter out the data from the query response
    return res;
}