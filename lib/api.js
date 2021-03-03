import Client, { previewClient } from './sanity';
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

const getClient = preview => preview ? previewClient : Client

export function urlFor(source){
    return imageUrlBuilder(Client).image(source);
}


export async function getAllBlogs(){
    const res = await Client
          .fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`); 
          //The data in {} after the [] is called projection, it's used to filter out the data from the query response
          // date is used here to order the posts, as the blogger has teh control over the date, while using the 
          // Sanity provided _createdAt would have the data/time on which the post was created, which thr blogger can't control
    return res;
}

export async function getPaginatedBlogs({offset, date} = {offset: 0, date: 'desc'}){
    const res = await Client
          .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`); 
          //The data in {} after the [] is called projection, it's used to filter out the data from the query response
          // date is used here to order the posts, as the blogger has teh control over the date, while using the 
          // Sanity provided _createdAt would have the data/time on which the post was created, which thr blogger can't control
    return res;
}

export async function getBlogBySlug(slug, preview){
    const currentClient = getClient(preview);
    const res = await currentClient
    .fetch(`*[_type == "blog" && slug == $slug]{
        ${blogFields} 
        content[]{..., "asset": asset->}
    }`, {slug})
    // Response has 2 objects in an array, res[0] published data | res[1] preview data
    .then(response => preview ? response?.[1]: response?.[0]);
    // .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])); = == ===> another crisp way of writing above statement
    // --- If on preview mode, if res[1](preview data) is available, return it or return res[0](published data), else return published data
    // Since the response would be an array, need to extract the first item
    // content []-> required, as response is an array {... -> get all of the data, "asset": asset-> -> get asset url as the value of the asset prop}
    
    // In preview mode, the changes made on blog are visible and the changes won't be reflected on the website, unless teh changes are published

    return res;
}
