import Client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
title, 
subtitle, 
slug,
date,
'author': author->{name,'avatar': avatar.asset->url},
coverImage,
` //not adding the , after coverImage(or ${blogFields} in getBlogBySlug), will throw some errors
/* url to the coverImage is available under the asset prop, while for author, nothing as an asset needs to be asccessed, sa the _ref is available
under author by default | {} -> specify only the required data */ 

export function urlFor(source){
    return imageUrlBuilder(Client).image(source);
}

export async function getAllBlogs(){
    const res = await Client
          .fetch(`*[_type == "blog"]{${blogFields}}`); 
          //The data in {} after the [] is called projection, it's used to filter out the data from the query response
    return res;
}

export async function getBlogBySlug(slug){
    const res = await Client
                .fetch(`*[_type == "blog" && slug == $slug]{
                    ${blogFields} 
                    content[]{..., "asset": asset->}
                }`, {slug})
                .then(response => response?.[0]);
    // Since the response would be an array, need to extract the first item
// content []-> required, as response is an array {... -> get all of the data, "asset": asset-> -> get asset url as the value of the asset prop}

    return res;
}